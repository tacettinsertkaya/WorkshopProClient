import { EventEmitter, Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
import { Retro } from "app/models/retro";
import { UserRight } from "app/models/userRight";
import { environment } from "environments/environment";
import { SharedService } from "../shared.service";
import { UserService } from "../user.service";



@Injectable()
export class UserHubService {

    connectionEstablished = new EventEmitter<Boolean>();

    allUserRight = new EventEmitter<Array<UserRight>>();

    private connectionIsEstablished = false;
    private _hubConnection: HubConnection;

    constructor(private userService: UserService, private sharedService: SharedService) {
        this.createConnection();
        this.startConnection();        this.getUserRights();

    }

    private createConnection() {


        this._hubConnection = new HubConnectionBuilder()
            .withUrl(environment.serverBaseUrl + "/UserHub")
            .configureLogging(LogLevel.Debug)
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
                setTimeout(()=> {
                    this.startConnection();
                }, 5000);
            });


    }





    setAllUserRights(retro) {
        this._hubConnection.invoke("allUserRight", retro).catch(err => this.startConnection());
    }

    private getUserRights(): void {
        this._hubConnection.on("allUserRight", (data: any) => {
            this.allUserRight.emit(data);
        });
    }


}