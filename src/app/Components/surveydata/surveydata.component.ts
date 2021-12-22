import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'surveydata',
  templateUrl: './surveydata.component.html',
  styleUrls: ['./surveydata.component.css']
})
export class SurveydataComponent implements OnInit {
  @Output() comment=new EventEmitter<string>();
  @Input() surveyrecord:Survey;

  constructor() { }


  PostToParent(comment:string)
  {
    alert(comment);
    this.comment.emit(comment);
  }
  ngOnInit(): void {
  }

}
