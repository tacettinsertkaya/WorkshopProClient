import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class BaseService {
  constructor(private http: HttpClient) {}

  private createTokenOptions() {
    return {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      ),
    };
  }

  public post<T>(item, base_url, end_point): Observable<T> {
    console.log("this.createTokenOptions()", this.createTokenOptions());
    console.log("token", localStorage.getItem("token"));

    return this.http.post<T>(
      `${base_url}/${end_point}`,
      item,
      this.createTokenOptions()
    );
  }

  public update<T>(item, base_url, end_point): Observable<T> {
    return this.http.post<T>(
      `${base_url}/${end_point}`,
      item,
      this.createTokenOptions()
    );
  }

  public get<T>(id: any, base_url, end_point): Observable<T> {
    return this.http.get<T>(
      `${base_url}/${end_point}/${id}`,
      this.createTokenOptions()
    );
  }

  public getQuery<T>(queryOptions: any, base_url, end_point): Observable<T> {
    return this.http.get<T>(
      `${base_url}/${end_point}?${queryOptions}`,
      this.createTokenOptions()
    );
  }

  public list<T>(queryOptions: string, base_url, end_point): Observable<T[]> {
    return this.http.get<T[]>(
      `${base_url}/${end_point}?${queryOptions}`,
      this.createTokenOptions()
    );
  }
  public delete(id: number, base_url, end_point) {
    return this.http.post(
      `${base_url}/${end_point}/${id}`,
      this.createTokenOptions()
    );
  }
}
