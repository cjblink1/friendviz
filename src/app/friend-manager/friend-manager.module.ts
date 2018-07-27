import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFriendButtonComponent } from './add-friend-button/add-friend-button.component';
import { RemoveFriendButtonComponent } from './remove-friend-button/remove-friend-button.component';
import { FriendManagerService } from './friend-manager.service';
import { MatButtonModule, MatBottomSheet, MatBottomSheetModule } from '../../../node_modules/@angular/material';
import { AddFriendBottomSheetComponent } from './add-friend-bottom-sheet/add-friend-bottom-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatBottomSheetModule
  ],
  declarations: [
    AddFriendButtonComponent, 
    RemoveFriendButtonComponent, 
    AddFriendBottomSheetComponent
  ],
  exports: [
    AddFriendButtonComponent,
    RemoveFriendButtonComponent
  ],
  entryComponents: [
    // AddFriendButtonComponent,
    AddFriendBottomSheetComponent
  ]
})
export class FriendManagerModule { }
