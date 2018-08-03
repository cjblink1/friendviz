import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFriendButtonComponent } from './add-friend-button/add-friend-button.component';
import { RemoveFriendButtonComponent } from './remove-friend-button/remove-friend-button.component';
import { MatButtonModule, MatBottomSheetModule, MatIconModule } from '@angular/material';
import { AddFriendBottomSheetComponent } from './add-friend-bottom-sheet/add-friend-bottom-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatIconModule
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
