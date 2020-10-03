import { EventEmitter, Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { Message } from "../models/message";
import { Comment } from "../models/comment";
import { environment } from "../../environments/environment";
import { RetroConfigration } from "app/models/retro-configuration";

@Injectable()
export class ChatService {
  messageReceived = new EventEmitter<Message>();
  messageListReceived = new EventEmitter<Message[]>();
  connectionEstablished = new EventEmitter<Boolean>();

  commentReceived = new EventEmitter<Comment>();
  retroConfigurationReceived = new EventEmitter<RetroConfigration>();

  private connectionIsEstablished = false;
  private _hubConnection: HubConnection;

  constructor() {
    this.createConnection();
    this.registerOnServerEvents();
    this.commentOnServerEvents();
    this.RetroConfigurationOnServerEvents();
    this.startConnection();
  }

  sendMessage(message: Message) {
    this._hubConnection.invoke("NewMessage", message);
  }

  sendComment(comment: Comment) {
    this._hubConnection.invoke("NewComment", comment);
  }

  getMessage() {
    this._hubConnection.invoke("GetMessage");
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
}
