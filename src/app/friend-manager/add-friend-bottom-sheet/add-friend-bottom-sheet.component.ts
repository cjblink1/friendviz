import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '../../../../node_modules/@angular/material';


@Component({
  selector: 'app-add-friend-bottom-sheet',
  templateUrl: './add-friend-bottom-sheet.component.html',
  styleUrls: ['./add-friend-bottom-sheet.component.css']
})
export class AddFriendBottomSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<AddFriendBottomSheetComponent>) { }

  ngOnInit() {
  }

  

}
