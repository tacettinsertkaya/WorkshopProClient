import { EventEmitter, Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
import { SubjectDto } from "app/models/dto/subject-dto";
import { Retro } from "app/models/retro";
import { Subject } from "app/models/subject";
import { UserRight } from "app/models/userRight";
import { environment } from "environments/environment";
import { SharedService } from "../shared.service";
import { UserService } from "../user.service";



@Injectable()
export class RetroHubService {

    connectionEstablished = new EventEmitter<Boolean>();
    currentRetroReceived = new EventEmitter<Retro>();
    allUserRight = new EventEmitter<Array<UserRight>>();
    subjectReceived = new EventEmitter<Subject>();


    private connectionIsEstablished = false;
    private _hubConnection: HubConnection;

    constructor(private userService: UserService, private sharedService: SharedService) {
        this.createConnection();
        this.startConnection();
        this.getCurrentRetro();
        this.getSelectedSubject();

    }

    private createConnection() {


        this._hubConnection = new HubConnectionBuilder()
            .withUrl(environment.serverBaseUrl + "/RetroHub")
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
                setTimeout(()=>{
                    this.startConnection();
                }, 5000);
            });


    }


    setCurrentRetro(data: Retro) {
        this._hubConnection.invoke("setCurrentRetro", data).catch(err => this.startConnection());
    }

    private getCurrentRetro(): void {
        this._hubConnection.on("currentRetroReceived", (data: any) => {
            this.currentRetroReceived.emit(data);
        });
    }


    setSelectedSubject(data: SubjectDto) {

        this._hubConnection.invoke("setSelectedSubject", data).catch(err => this.startConnection());
    }

    private getSelectedSubject(): void {
        this._hubConnection.on("getSelectedSubjectReceived", (data: any) => {
            this.subjectReceived.emit(data);
        });
    }




}