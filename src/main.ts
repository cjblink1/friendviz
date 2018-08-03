import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
declare var gapi: any;

if (environment.production) {
  enableProdMode();
}
const params: gapi.auth2.ClientConfig = {client_id: '595826420452-tnbgtetamaf2320nrbf37pgllij76hjb.apps.googleusercontent.com'};
gapi.load('auth2', () => {
  gapi.auth2.init(params).then((googleAuth: gapi.auth2.GoogleAuth) => {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
  });
});

