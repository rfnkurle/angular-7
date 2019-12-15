import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-primer';
  appName = 'My Assignments App';

  constructor(private authService: AuthService, private router: Router
  ){}  
  
  login(){
    if(this.authService.loggedIn === false){
      this.authService.logIn();
    }else {
      this.authService.logOut();
      this.router.navigate(['/home'])//send tem back to the home page if not logged in
    }
  }
  
}

