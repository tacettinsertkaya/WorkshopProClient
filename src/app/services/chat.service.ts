import { EventEmitter, Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { Message } from "../models/message";
import { Comment } from "../models/comment";
import { environment } from "../../environments/environment";
import { RetroConfigration } from "app/models/retro-configuration";
import { VoteDto } from "app/models/dto/vote-dto";
import { Retro } from "app/models/retro";
import { Subject } from "app/models/subject";
import { UserRight } from "app/models/userRight";

@Injectable()
export class ChatService {
  messageReceived = new EventEmitter<Message>();
  messageListReceived = new EventEmitter<Message[]>();
  connectionEstablished = new EventEmitter<Boolean>();

  commentReceived = new EventEmitter<Comment>();
  subjectReceived = new EventEmitter<Subject>();
  voteReceived = new EventEmitter<Comment>();
  currentRetroReceived = new EventEmitter<Retro>();
  currentRetro = new EventEmitter<RetroConfigration>();
  retroConfigurationReceived = new EventEmitter<UserRight>();
  allUserRight = new EventEmitter<Array<UserRight>>();
  categorizedMessage = new EventEmitter<string>();

  private connectionIsEstablished = false;
  private _hubConnection: HubConnection;

  constructor() {
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
    this.startConnection();
  }

  sendMessage(message: Message) {
    this._hubConnection.invoke("NewMessage", message);
  }

  sendComment(comment: Comment) {
    this._hubConnection.invoke("NewComment", comment);
  }

  setVote(data:VoteDto) {
    this._hubConnection.invoke("setVote", data);
  }

  setCurrentRetro(data:Retro) {
  
    this._hubConnection.invoke("setCurrentRetro", data);
  }

  setSelectedSubject(data:Subject) {
  
    this._hubConnection.invoke("setSelectedSubject", data);
  }

  setCurrentRetroConfig(data:Retro) {
    
    this._hubConnection.invoke("setCurrentRetroConfig",data);
  }

  

  getCategorizedMessage() {
    this._hubConnection.invoke("getCategorizedMessage");
  }

  getMessage() {
    this._hubConnection.invoke("GetMessage");
  }

  getAllUserRights(retro) {
    this._hubConnection.invoke("allUserRight",retro);
  }

  private createConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(environment.serverBaseUrl + "/MessageHub")
      .build();
  }

  private startConnection(): void {
    this._hubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        console.log("Hub connection started");
        this.connectionEstablished.emit(true);
      })
      .catch((err) => {
        console.log("Error while establishing connection, retrying...");
        setTimeout(function () {
          this.startConnection();
        }, 5000);
      });
  }

  private registerOnServerEvents(): void {
    this._hubConnection.on("MessageReceived", (data: any) => {
      this.messageReceived.emit(data);
    });
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
