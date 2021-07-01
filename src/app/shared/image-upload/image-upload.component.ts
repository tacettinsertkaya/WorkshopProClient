import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileResponse } from 'app/models/dto/file-response';
import { UploadService } from 'app/services/upload.service';
import { environment } from 'environments/environment';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  @Input() isPreview:boolean=true; 

  public progress: number;
  public message: string;

  formData: any;
  @Output() images = new EventEmitter<Array<string>>();
  imageList: Array<string> = [];
  imagePathList: Array<string> = [];
  image: any;
  selectedFile: File;
  uploadData = new FormData();

  constructor(private http: HttpClient,private uploadService:UploadService) { }
  ngOnInit() {
  }


  onFilesSelected(evt: Event) {
    const files: FileList = (evt.target as HTMLInputElement).files;
    const formData = new FormData();


    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // IMPORTANT: 'files' must match parameter name in controller's action
      formData.append("filesObject", file, file.name);
    }

    this.uploadService
      .IMAGE_UPLOAD(formData)
      .pipe(first())
      .subscribe((result) => {
        
        let path=result[0];
        this.imagePathList.push(path);

        this.uploadService
        .GET_IMAGE(path)
        .pipe(first())
        .subscribe((res) => {

          this.imageList = res;
          this.images.emit(this.imagePathList)

        });


      });
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];

    this.uploadData.append("filesObject", this.selectedFile);

  }

  onUpload() {}

}
