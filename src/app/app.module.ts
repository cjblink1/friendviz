import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { ControlComponent } from './control/control.component';
import { FriendManagerModule } from './friend-manager/friend-manager.module';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FriendManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
