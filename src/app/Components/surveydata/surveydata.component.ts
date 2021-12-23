import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'survey',
  templateUrl: './surveydata.component.html',
  styleUrls: ['./surveydata.component.css']
})
export class SurveydataComponent implements OnInit {
  // @Input("SurveyRecord") surveydata:Survey;  // with an alias
  @Input() surveyrecord:Survey;
  @Output() notify =new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  PostComment(comment)
  {
    this.notify.emit(comment);
  }

}
