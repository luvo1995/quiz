import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
ans1:string;
ans2;
ans3;
ans4;
ans5;
timer;
maxTime;
hidevalue;
pp



 timeInSeconds;
 time;
 runTimer;
 hasStarted;
 hasFinished;
 remainingTime;
 displayTime;
 



// category;
// category2;
 //category3


  constructor(private router: Router, private route: ActivatedRoute) { }
  next(){
    console.log(this.displayTime)
    this.router.navigateByUrl("category2")
    this.router.navigate(['/category2'], { queryParams: { pp:this.pp, ans1:this.ans1, ans2:this.ans2, ans3:this.ans3, ans4:this.ans4,  ans5:this.ans5 } });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)

    // this.pp = params.pp
    // console.log(this.pp)
    

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
  // this.pp = this.displayTime;
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
    this.router.navigateByUrl("category2")
  // this.category= false;
  // this.category2 = false;
  // this.category3 = true;
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
 








