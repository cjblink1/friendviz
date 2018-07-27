import { TestBed, inject } from '@angular/core/testing';

import { FriendManagerService } from './friend-manager.service';

describe('FriendManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendManagerService]
    });
  });

  it('should be created', inject([FriendManagerService], (service: FriendManagerService) => {
    expect(service).toBeTruthy();
  }));
});
