import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-tlist',
  templateUrl: './tlist.component.html',
  styleUrls: ['./tlist.component.css']
})
export class TlistComponent implements OnInit {

  surveyInfo:Survey[]; // collection

  constructor() { }

  // whenever the component is loaded this hook code will fire
  ngOnInit(): void {
    this.surveyInfo=[
      new Survey(101,"Adventure Trip","/assets/images/101.jpg",true,"/assets/videos/bbb.mp4"),
      new Survey(102,"Study Trip","/assets/images/102.jpg",true,"/assets/videos/bbb.mp4"),
      new Survey(103,"Research Trip","/assets/images/103.jpg",false,"/assets/videos/bbb.mp4"),
      new Survey(104,"Implementation Trip","/assets/images/104.png",true,"/assets/videos/bbb.mp4")
    ];
  }

  Create(txtcode,txttitle,txtlocation,txtvideo)
  {
    this.surveyInfo.unshift(new Survey(txtcode,txttitle,txtlocation,false,txtvideo));
    alert("Survey Added");
    // code to add values to our list and update on the screen
  }

  Display(survey:Survey)
  {
    survey.Visible=!survey.Visible;
  }

}
