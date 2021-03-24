import { EventEmitter, Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
import { Message } from "../models/message";
import { Comment } from "../models/comment";
import { environment } from "../../environments/environment";
import { RetroConfigration } from "app/models/retro-configuration";
import { VoteDto } from "app/models/dto/vote-dto";
import { Retro } from "app/models/retro";
import { Subject } from "app/models/subject";
import { UserRight } from "app/models/userRight";
import { UserService } from "./user.service";
import { SubjectDto } from "app/models/dto/subject-dto";
import { RetroAnnouncement } from "app/models/retro-announcement";
import { User } from "app/models/user";
import { AuthenticateResponse } from "app/models/authenticate-response";
import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";
import { SharedService } from "./shared.service";


@Injectable()
export class ChatService {
  messageReceived = new EventEmitter<Message>();
  onlineUserReceived = new EventEmitter<AuthenticateResponse[]>();
  offlineUserReceived = new EventEmitter<string[]>();
  messageListReceived = new EventEmitter<Message[]>();
  connectionEstablished = new EventEmitter<Boolean>();

  commentReceived = new EventEmitter<Comment>();
  announcementReceived = new EventEmitter<RetroAnnouncement>();
  subjectReceived = new EventEmitter<Subject>();
  voteReceived = new EventEmitter<Comment>();
  currentRetroReceived = new EventEmitter<Retro>();
  currentRetro = new EventEmitter<RetroConfigration>();
  retroConfigurationReceived = new EventEmitter<UserRight>();
  allUserRight = new EventEmitter<Array<UserRight>>();
  categorizedMessage = new EventEmitter<string>();

  private connectionIsEstablished = false;
  private _hubConnection: HubConnection;

  constructor(private userService: UserService,private sharedService: SharedService) {
    this.createConnection();
    this.registerOnServerEvents();
    this.commentOnServerEvents();
    this.RetroConfigurationOnServerEvents();
    this.getCurrentRetroEvents();
    this.voteOnServerEvents();
    this.currentRetroEvents();
    this.getSelectedSubjectEvents();
    this.AllUserRightOnServerEvents();
    this.getCategorizedMessageEvents();
    this.onlineUserOnServerEvents();
    this.offlineUserOnServerEvents();
    this.retroAnnouncementOnServerEvents();
    this.closeConnection();
    this.startConnection();
  }

  private createConnection() {

    
      this._hubConnection = new HubConnectionBuilder()
        .withUrl(environment.serverBaseUrl+ "/MessageHub")
        .configureLogging(LogLevel.Information)
        .build();
  }



  private async startConnection(): Promise<void> {
    await this._hubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        this.connectionEstablished.emit(true);
      })
      .catch((err) => {
        console.log("Error while establishing connection, retrying...");
        setTimeout(function () {
          this.startConnection();
        }, 5000);
      });

      
  }

 private async closeConnection(): Promise<void>{
    this._hubConnection.onclose(() => { 
      setTimeout(function(){
              this.startConnection();
         },3000); 
     }); 
  }



  userOnline() {
    let currentUser=this.userService.currentUserValue;
  
    this._hubConnection.invoke("OnlineUser",currentUser).catch(err =>this.startConnection());
  }

  userOffline() {
    this._hubConnection.invoke("OfflineUser", this.userService.currentUserValue.userName).catch(err =>this.startConnection());
    ;
  }


  sendMessage(message: Message) {
    this._hubConnection.invoke("NewMessage", message).catch(err =>this.startConnection());
  }

  sendComment(comment: Comment) {
    this._hubConnection.invoke("NewComment", comment).catch(err =>this.startConnection());
  }

  setVote(data: VoteDto) {
    this._hubConnection.invoke("setVote", data).catch(err =>this.startConnection());
  }

  setOnlineUser(data: string) {
    this._hubConnection.invoke("GetOnlineUser", data).catch(err =>this.startConnection());
  }

  setCurrentRetro(data: Retro) {

    this._hubConnection.invoke("setCurrentRetro", data).catch(err =>this.startConnection());

    firebase.default.database().ref('currentRetro/').child(data.id).set(data);
    
  }



  setSelectedSubject(data:SubjectDto) {

    this._hubConnection.invoke("setSelectedSubject", data).catch(err =>this.startConnection());
  }

 

  setCurrentRetroConfig(data: Retro) {

    this._hubConnection.invoke("setCurrentRetroConfig", data).catch(err =>this.startConnection());
  }


  setRetroAnnouncement(data:RetroAnnouncement) {
  
    this._hubConnection.invoke("setRetroAnnouncement",data).catch(err =>this.startConnection());
  }

  getCategorizedMessage() {
    this._hubConnection.invoke("getCategorizedMessage").catch(err =>this.startConnection());
  }

  getMessage() {
    this._hubConnection.invoke("GetMessage").catch(err =>this.startConnection());
  }

  getAllUserRights(retro) {
    this._hubConnection.invoke("allUserRight", retro).catch(err =>this.startConnection());
  }

  private onlineUserOnServerEvents(): void {
    this._hubConnection.on("OnlineUser", (data: any) => {
      this.onlineUserReceived.emit(data);
    });
  }

  private offlineUserOnServerEvents(): void {
    this._hubConnection.on("OfflineUser", (data: any) => {
      this.offlineUserReceived.emit(data);
    });
  }

  private retroAnnouncementOnServerEvents(): void {
    this._hubConnection.on("getRetroAnnouncement", (data: any) => {
      this.announcementReceived.emit(data);
    });
  }

  private registerOnServerEvents(): void {

   

    // this._hubConnection.on("MessageReceived", (data: any) => {
    //   this.messageReceived.emit(data);
    // });
  }

  private commentOnServerEvents(): void {
    this._hubConnection.on("CommentReceived", (data: any) => {
      this.commentReceived.emit(data);
    });
  }


  private RetroConfigurationOnServerEvents(): void {
    this._hubConnection.on("RetroConfig", (data: any) => {
      this.retroConfigurationReceived.emit(data);
    });
  }

  private AllUserRightOnServerEvents(): void {
    this._hubConnection.on("allUserRight", (data: any) => {
      this.allUserRight.emit(data);
    });
  }

  private voteOnServerEvents(): void {
    this._hubConnection.on("VoteReceived", (data: any) => {
      this.voteReceived.emit(data);
    });
  }

  private currentRetroEvents(): void {
    this._hubConnection.on("currentRetroReceived", (data: any) => {
      this.currentRetroReceived.emit(data);
    });
  }

  private getCurrentRetroEvents(): void {
    this._hubConnection.on("getCurrentRetroReceived", (data: any) => {
      this.currentRetro.emit(data);
    });
  }

  private getSelectedSubjectEvents(): void {
    this._hubConnection.on("getSelectedSubjectReceived", (data: any) => {
      this.subjectReceived.emit(data);
    });
  }


  private getCategorizedMessageEvents(): void {
    this._hubConnection.on("categorizedMessageReceived", (data: any) => {
      this.categorizedMessage.emit(data);
    });
  }
}
