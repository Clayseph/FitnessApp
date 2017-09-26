import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService} from './configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ConfigurationService ]
})
export class AppComponent {
  title = 'app works!';
  module: string;
  constructor(public router: Router){

  }

  showLogin(){
    this.module = "Login";
    this.router.navigate(['/Login'])
  }
  

}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}