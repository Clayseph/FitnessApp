import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, public fb:FormBuilder) { }
  module: string;


  public loginForm = this.fb.group({
    email:["", Validators.required],
    password:["",Validators.required]
  });

 
  
  ngOnInit() {
  }
  
  doLogin(event){
    console.log(event);
    console.log(this.loginForm.value);
  }



  showMainPage(){
    this.module = "MainPage";
    this.router.navigate(['/MainPage'])
  }
} 

 function containsMagicWord(c: FormControl) {
  if(c.value.indexOf('magic') >= 0) {
    console.log('not valid')
    return {
      noMagic: true
    }
  }

  // Null means valid, believe it or not
  console.log('valid')
  return null
}
