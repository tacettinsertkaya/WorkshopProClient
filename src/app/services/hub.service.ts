import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { environment } from "../../environments/environment";

export class Hub {
  private hubConnection: HubConnection;
  createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(environment.serverBaseUrl + "/messagehub")
      .build();

    this.hubConnection
      .start()
      .then(() => {})
      .catch((err) => {
        setTimeout(function () {
          this.startConnection();
        }, 5000);
        return console.error(err.toString());
      });

    this.hubConnection.on("postMessage", (res) => {
     
    });
  }
}
