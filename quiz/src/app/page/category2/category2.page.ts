import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.page.html',
  styleUrls: ['./category2.page.scss'],
})
export class Category2Page implements OnInit {
  ans1;
  ans2;
  ans3;
  ans4;
  ans5;
  a1;
  a2;
  a3;
  a4;
  a5;
  pp1;

  pp




  
 timeInSeconds;
 time;
 runTimer;
 hasStarted;
 hasFinished;
 remainingTime;
 displayTime;



 
// category;
 //category2;
 //category3
 

  
  constructor(private router: Router, private routes: ActivatedRoute) { this.pp1 = this.displayTime;}


  next(){
    console.log(this.displayTime)
    this.router.navigateByUrl('category3')
    this.router.navigate(['/category3'], { queryParams: {  pp:this.pp,     pp1:this.pp1,      ans1:this.ans1, ans2:this.ans2, ans3:this.ans3, ans4:this.ans4,  ans5:this.ans5,
       a1:this.a1, a2:this.a2, a3:this.a3, a4:this.a4,  a5:this.a5} })
  }

  ngOnInit() {
    this.routes.queryParams.subscribe(params =>{
      console.log(params)


      
      // this.pp1 = params.pp1
      // console.log(this.pp1)


      this.ans1 = params.ans1
    console.log(this.ans1)
    this.ans2 = params.ans2
    console.log(this.ans2)
    this.ans3 = params.ans3
    console.log(this.ans3)
    this.ans4 = params.ans4
    console.log(this.ans4)
    this.ans5 = params.ans5
    console.log(this.ans5)
    this.a1 = params.a1
    console.log(this.a1)
    this.a2 = params.a2
    console.log(this.a2)
    this.a3 = params.a3
    console.log(this.a3)
    this.a4 = params.a4
    console.log(this.a4)
    this.a5 = params.a5
    console.log(this.a5)
  
  })
  this.initTimer();
  this. startTimer();
 }


 initTimer() {
  // Pomodoro is usually for 25 minutes
 if (!this.timeInSeconds) {
   this.timeInSeconds = 120;
 }
 this.time = this.timeInSeconds;
 this.runTimer = false;
 this.hasStarted = false;
 this.hasFinished = false;
 this.remainingTime = this.timeInSeconds;
 this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
}
startTimer(){
this.runTimer = true;
this.hasStarted = true;
this.timerTick();
}
timerTick() {
setTimeout(() => {
if (!this.runTimer) { return; }
this.remainingTime--;
this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
if (this.remainingTime > 0) {
  this.timerTick();
}
else if (this.hasFinished = true) {
  this.router.navigateByUrl("category3")
 // this.category= false;
   //this.category2 = false;
   //this.category3 = true;
}
}, 1000 );
}
getSecondsAsDigitalClock(inputSeconds: number) {
var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
var hours = Math.floor(sec_num / 3600);
var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
var seconds = sec_num - (hours * 3600) - (minutes * 60);
var hoursString = '';
var minutesString = '';
var secondsString = '';
hoursString = (hours < 10) ? "0" + hours : hours.toString();
minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
return hoursString + ':' + minutesString + ':' + secondsString;
}

}
