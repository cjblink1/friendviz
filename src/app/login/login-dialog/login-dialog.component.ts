import { Component, OnInit } from '@angular/core';
import { LoginService, AbstractLoginObserver } from '../login.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent extends AbstractLoginObserver implements OnInit {

  constructor(private loginService: LoginService) {
    super();
    loginService.addObserver(this);
  }

  ngOnInit() {
    this.renderButton();
  }

  renderButton() {
    console.log('rendering button');
    gapi.signin2.render('g-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      // 'onsuccess': () => this.loginService.onSignIn(),
      // 'onfailure': () => console.log('Error')
    });
  }

  signOut() {
    this.loginService.signOut();
  }

}
