import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { AddFriendBottomSheetComponent } from '../add-friend-bottom-sheet/add-friend-bottom-sheet.component';

@Component({
  selector: 'app-add-friend-button',
  templateUrl: './add-friend-button.component.html',
  styleUrls: ['./add-friend-button.component.css']
})
export class AddFriendButtonComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  addFriend() {
    this.bottomSheet.open(AddFriendBottomSheetComponent);
  }

}
