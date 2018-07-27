import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendButtonComponent } from './add-friend-button.component';

describe('AddFriendButtonComponent', () => {
  let component: AddFriendButtonComponent;
  let fixture: ComponentFixture<AddFriendButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFriendButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFriendButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
