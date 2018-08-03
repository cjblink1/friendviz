import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './control.component';
import { FriendManagerModule } from '../friend-manager/friend-manager.module';
import { MatIconModule, MatToolbarModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FriendManagerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    ControlComponent
  ],
  exports: [
    ControlComponent
  ]
})
export class ControlModule { }
