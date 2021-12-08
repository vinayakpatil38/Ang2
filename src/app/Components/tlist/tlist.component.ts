import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-tlist',
  templateUrl: './tlist.component.html',
  styleUrls: ['./tlist.component.css']
})
export class TlistComponent implements OnInit {

  surveyInfo:Survey[];

  constructor() { }

  // whenever the component is loaded this hook code will fire
  ngOnInit(): void {
    this.surveyInfo=[
      new Survey(101,"Adventure Trip","India",true,"101.mp4"),
      new Survey(102,"Study Trip","USA",true,"102.mp4"),
      new Survey(103,"Research Trip","U K",true,"103.mp4"),
      new Survey(104,"Implementation Trip","India",true,"104.mp4")
    ];
  }

}
