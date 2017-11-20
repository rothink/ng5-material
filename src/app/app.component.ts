import { Component } from '@angular/core';
import {} from '@angular/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer : string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;


  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answer = 'Rodrigo';
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000 );

}
