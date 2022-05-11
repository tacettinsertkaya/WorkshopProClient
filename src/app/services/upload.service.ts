import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilePath } from 'app/models/file-path';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }


  private token = localStorage.getItem('token');

  IMAGE_UPLOAD(formData: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token);
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
    headers = headers.append('Access-Control-Max-Age', '3600');
    headers = headers.append('Access-Control-Allow-Headers', 'x-requested-with, authorization, cache-control');
    headers = headers.append('Access-Control-Expose-Headers', 'Authorization');
    const response = this.httpClient.post<string[]>(
      environment.serverBaseUrl + '/FileUpload/ImageUpload',
      formData, {headers}
    );
    return response;
  }

 



  VIDEO_UPLOAD(formData: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token);
    headers = headers.append('Authorization', 'Bearer ' + this.token);
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
    headers = headers.append('Access-Control-Max-Age', '3600');
    headers = headers.append('Access-Control-Allow-Headers', 'x-requested-with, authorization, cache-control');
    headers = headers.append('Access-Control-Expose-Headers', 'Authorization');
    const response = this.httpClient.post<string[]>(
      environment.serverBaseUrl + '/FileUpload/VideoUpload',
      formData, {headers}
    );
    return response;
  }



  DOCUMENT_UPLOAD(formData: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token);
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
    headers = headers.append('Access-Control-Max-Age', '3600');
    headers = headers.append('Access-Control-Allow-Headers', 'x-requested-with, authorization, cache-control');
    headers = headers.append('Access-Control-Expose-Headers', 'Authorization');

    const response = this.httpClient.post<HttpEvent<any>>(
      environment.serverBaseUrl + '/FileUpload/DocumentUpload',
      formData, {headers, reportProgress: true,observe: 'events'}
    );
    return response;
    
   
  }
  
  GET_IMAGE(path: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token);
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
    headers = headers.append('Access-Control-Max-Age', '3600');
    headers = headers.append('Access-Control-Allow-Headers', 'x-requested-with, authorization, cache-control');
    headers = headers.append('Access-Control-Expose-Headers', 'Authorization');
    headers = headers.append('Authorization', 'Bearer ' + this.token);
    const data = new FilePath();
    data.path = path;
    const response = this.httpClient.post<string[]>(
      environment.serverBaseUrl + '/FileUpload/GetImage',
      data, {headers}
    );
    return response;
  }

  
  GET_DOCUMENT(path: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.token);
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
    headers = headers.append('Access-Control-Max-Age', '3600');
    headers = headers.append('Access-Control-Allow-Headers', 'x-requested-with, authorization, cache-control');
    headers = headers.append('Access-Control-Expose-Headers', 'Authorization');
    headers = headers.append('Authorization', 'Bearer ' + this.token);
    const data = new FilePath();
    data.path = path;
    const response = this.httpClient.post<any>(
      environment.serverBaseUrl + '/FileUpload/GetDocument',
      data, {headers}
    );
    return response;
  }
}
