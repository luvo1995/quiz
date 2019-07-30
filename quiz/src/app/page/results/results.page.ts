import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
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
  answer1;
  answer2;
  answer3;
  answer4;
  answer5;
  results;
  total;
  status;
  disabled=false;
  negans1;
  negans2;
  negans3;
  negans4;
  negans5;
  nega1;
  nega2;
  nega3;
  nega4;
  nega5;
  neganswer1;
  neganswer2;
  neganswer3;
  neganswer4;
  neganswer5;
  timetaken;
  remainingTime;
  // pp1;
  // pp;
  // pq;


  constructor(private router: Router, private routes: ActivatedRoute) {
    this.timetaken=""
    this.total=0
    this.status=""
    this.disabled=false
    this.negans1=""
  this.negans2=""
  this.negans3=""
  this.negans4=""
 this.negans5=""
 this.nega1=""
  this.nega2=""
  this.nega3=""
  this.nega4=""
  this.nega5=""
  this.neganswer1=""
  this.neganswer2=""
  this.neganswer3=""
  this.neganswer4=""
  this.neganswer5=""

   }

  show(){
    if(this.ans1=="Africa"){
      this.total +=1;
      this.negans1="correct"
    }else{
      this.total=this.total;
      this.negans1="wrong"
    }
    if(this.ans2=="True"){
      this.total +=1;
      this.negans2="correct"
    }else{
      this.total=this.total;
      this.negans2="wrong"
    }
    if(this.ans3=="In North America"){
      this.total +=1;
      this.negans3="correct"
    }else{
      this.total=this.total;
      this.negans3="wrong"
    }
    if(this.ans4=="True"){
      this.total +=1;
      this.negans4="correct"
    }else{
      this.total=this.total;
      this.negans4="wrong"
    }
    if(this.ans5=="Equator"){
      this.total +=1;
      this.negans5="correct"
    } else{
      this.total=this.total;
      this.negans5="wrong"
    }
    if(this.a1=="180"){
      this.total +=1;
      this.nega1="correct"
    } else{
      this.total=this.total;
      this.nega1="wrong"
    }
    if(this.a2=="Right angled triangle"){
      this.total +=1;
      this.nega2="correct"
    } else{
      this.total=this.total;
      this.nega2="wrong"
    }
    if(this.a3=="Sphere"){
      this.total +=1;
      this.nega3="correct"
    } else{
      this.total=this.total;
      this.nega3="wrong"
    }
    if(this.a4=="Yes"){
      this.total +=1;
      this.nega4="correct"
    } else{
      this.total=this.total;
      this.nega4="wrong"
    }
    if(this.a5=="Obtuse"){
      this.total +=1;
      this.nega5="correct"
    } else{
      this.total=this.total;
      this.nega5="wrong"
    }
    if(this.answer1== "Who are you"){
      this.total +=1;
      this.neganswer1="correct"
    } else{
      this.total=this.total;
      this.neganswer1="wrong"
    }
    if(this.answer2=="Andityi"){
      this.total +=1;
      this.neganswer2="correct"
    } else{
      this.total=this.total;
      this.neganswer2="wrong"
    }
    if(this.answer3=="I am going to watch"){
      this.total +=1; 
      this.neganswer3="correct"
    } else{
      this.total=this.total;
      this.neganswer3="wrong"
    }
    if(this.answer4=="Ububukele"){
      this.total +=1;
      this.neganswer4="correct"
    } else{
      this.total=this.total;
      this.neganswer4="wrong"
    }
    if(this.answer5=="ndiya dlala"){
      this.total +=1;
       this.neganswer5="correct"
    } else{
      this.total=this.total;
      this.neganswer5="wrong"
    }
    if(this.total>7){
      this.status ="pass";
    }else{
      this.status ="fail";
    }
    console.log(this.total)
    this.disabled = true;
// if(this.pp1== "remainingTime",
//     this.pq== "remainingTime",
//     this.pp=="remainingTime"){
//      this.timetaken="p+pp+pq"
   // }

  }

  done(){
    this.router.navigateByUrl('home')
    this.disabled=false;
  }

  ngOnInit() {
    this.routes.queryParams.subscribe(params =>{
      console.log(params)
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
    this.answer1 = params.answer1
    console.log(this.answer1)
    this.answer2 = params.answer2
    console.log(this.answer2)
    this.answer3 = params.answer3
    console.log(this.answer3)
    this.answer4 = params.answer4
    console.log(this.answer4)
    this.answer5 = params.answer5
    console.log(this.answer5)
  })
  }
}
