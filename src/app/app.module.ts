import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { FriendManagerModule } from './friend-manager/friend-manager.module';
import { GraphModule } from './graph/graph.module';
import { ControlModule } from './control/control.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GraphModule,
    ControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
