import {Component, inject} from '@angular/core';
import {ErrorService} from "./services/error.service";
import {from} from "rxjs";
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ole-hr-system';
  error$ = this.errorService.error$;

  constructor(private errorService: ErrorService, private authService: AuthService, private router: Router) {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return this.authService.isLoggedIn();
  }
}
