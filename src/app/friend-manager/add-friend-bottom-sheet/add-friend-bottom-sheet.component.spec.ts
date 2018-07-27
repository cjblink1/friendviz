import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendBottomSheetComponent } from './add-friend-bottom-sheet.component';

describe('AddFriendBottomSheetComponent', () => {
  let component: AddFriendBottomSheetComponent;
  let fixture: ComponentFixture<AddFriendBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFriendBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFriendBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
