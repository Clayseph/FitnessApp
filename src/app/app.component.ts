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
