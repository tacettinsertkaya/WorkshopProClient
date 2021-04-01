import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectDto } from 'app/models/dto/subject-dto';
import { Retro } from 'app/models/retro';
import { Subject } from 'app/models/subject';
import { RetroHubService } from 'app/services/hub/retro-hub.service';
import { RetroConfigurationService } from 'app/services/retro-configuration';
import { SharedService } from 'app/services/shared.service';
import { SubjectsService } from 'app/services/subject.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-subject-header',
  templateUrl: './subject-header.component.html',
  styleUrls: ['./subject-header.component.css']
})
export class SubjectHeaderComponent implements OnInit {
  currentRetro: Retro;
  selectSubject: Subject=new Subject();

  constructor(
    private subjectService: SubjectsService,
    private retroConfigurationService: RetroConfigurationService,
    private retroHubService: RetroHubService,
    private sharedService:SharedService,
    private _ngZone: NgZone,
  ) {

  }


  ngOnInit() {
    this.getLastCurrentRetro();
  }



  getLastCurrentRetro() {

    this.retroConfigurationService
      .getLastRetro()
      .pipe(first())
      .subscribe(
        (res) => {

          this.currentRetro = res;
         

          if (this.currentRetro)
            this.getRetroSubject(this.currentRetro.id);
        },
        (error) => {

        });
  }


  private getRetroSubject(retroId) {
    this.subjectService
      .getRetroSubject(retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.selectSubject = res;
          console.log("getRetroSubject", this.selectSubject );
          
        },
        (error) => {

        });
  }


}
