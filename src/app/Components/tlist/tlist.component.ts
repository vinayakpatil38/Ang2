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
      new Survey(101,"Adventure Trip","/assets/images/101.jpg",true,"/assets/videos/bbb.mp4"),
      new Survey(102,"Study Trip","/assets/images/102.jpg",true,"/assets/videos/bbb.mp4"),
      new Survey(103,"Research Trip","/assets/images/103.jpg",true,"/assets/videos/bbb.mp4"),
      new Survey(104,"Implementation Trip","/assets/images/104.png",true,"/assets/videos/bbb.mp4")
    ];
  }

}
