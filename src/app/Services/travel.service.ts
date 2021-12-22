import { Injectable } from '@angular/core';
import { Survey } from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  surveyInfo:Survey[];

  constructor() {
    this.surveyInfo=[
      new Survey(101,"Adventure Trip","/assets/images/101.jpg",true,"/assets/videos/bbb.mp4"),
      new Survey(102,"Study Trip","/assets/images/102.jpg",true,"/assets/videos/bbb.mp4"),
      new Survey(103,"Research Trip","/assets/images/103.jpg",false,"/assets/videos/bbb.mp4"),
      new Survey(104,"Implementation Trip","/assets/images/104.png",true,"/assets/videos/bbb.mp4")
    ];
  }


}
