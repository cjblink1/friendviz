import { Component, OnInit, NgZone } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { LoginService, AbstractLoginObserver } from '../login.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent extends AbstractLoginObserver implements OnInit {

  private profileImageUrl: string;
  signedIn: boolean;

  constructor(private dialog: MatDialog, private loginService: LoginService, private zone: NgZone) {
    super();
    loginService.addObserver(this);
  }

  ngOnInit() {
    if (this.loginService.signedIn()) {
      this.profileImageUrl = this.loginService.getProfileImageUrl();
      this.signedIn = true;
    }
  }

  onSignIn() {
    console.log('button sign in');
    this.zone.run(() => {
      this.profileImageUrl = this.loginService.getProfileImageUrl();
      this.signedIn = true;
    });
  }

  onSignOut() {
    console.log('Button sign out.');
    this.zone.run(() => {
      this.signedIn = false;
    });
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent);
  }

}
