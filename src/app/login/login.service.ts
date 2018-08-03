import { Injectable } from '@angular/core';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private observers: AbstractLoginObserver[] = [];
  private googleAuth: gapi.auth2.GoogleAuth;

  constructor() {
    this.googleAuth = gapi.auth2.getAuthInstance();
    this.googleAuth.isSignedIn.listen(signedIn => signedIn ? this.onSignIn() : this.onSignOut());
  }

  signedIn() {
    return this.googleAuth.isSignedIn.get();
  }

  getProfileImageUrl() {
    return this.googleAuth.currentUser.get().getBasicProfile().getImageUrl();
  }

  signOut() {
    this.googleAuth.disconnect();
  }

  onSignIn() {
    this.observers.forEach(observer => observer.onSignIn());
  }

  onSignOut() {
    this.observers.forEach(observer => observer.onSignOut());
  }

  addObserver(observer: AbstractLoginObserver) {
    this.observers.push(observer);
  }
}

export abstract class AbstractLoginObserver {
  onSignIn() {}
  onSignOut() {}
}
