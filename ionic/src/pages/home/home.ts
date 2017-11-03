///<reference path="../../app/app.data.service.ts"/>
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  summary = [];
  questions = [];

  // start for first question in array
  currentQuestion = 0;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get(`http://localhost:3000/questions`).map(res => res.json()).subscribe(data => {
      this.questions = data;
    });
  }

  // returns HTML icon with positive or negative answer
  getSummaryHtmlAnswer = (answer => {
    return answer===1?`<ion-icon name="checkmark-circle"></ion-icon>`:`<ion-icon name="close-circle"></ion-icon>`;
  });

  // save user answer and advances to the next step
  setAnswer = (resp => {

    this.summary.push({key: this.currentQuestion, value: resp});

    if (this.currentQuestion < this.questions.length) {
      this.currentQuestion++;
    }
  });
}
