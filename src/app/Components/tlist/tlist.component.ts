import { Component, OnInit, Input } from '@angular/core';
import { Survey } from 'src/app/models/survey';
import { TravelService } from 'src/app/Services/travel.service';

@Component({
  selector: 'app-tlist',
  templateUrl: './tlist.component.html'
})
export class TlistComponent implements OnInit {

  surveyInfo:Survey[]; // collection

  constructor(private travelService:TravelService) { }

  // whenever the component is loaded this hook code will fire
  ngOnInit(): void {
   this.surveyInfo=this.travelService.surveyInfo;
  }

  Show(s)
  {
    alert("message " + s);
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
