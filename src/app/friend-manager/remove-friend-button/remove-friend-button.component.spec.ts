import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFriendButtonComponent } from './remove-friend-button.component';

describe('RemoveFriendButtonComponent', () => {
  let component: RemoveFriendButtonComponent;
  let fixture: ComponentFixture<RemoveFriendButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFriendButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFriendButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
