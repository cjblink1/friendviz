import { FriendManagerModule } from './friend-manager.module';

describe('FriendManagerModule', () => {
  let friendManagerModule: FriendManagerModule;

  beforeEach(() => {
    friendManagerModule = new FriendManagerModule();
  });

  it('should create an instance', () => {
    expect(friendManagerModule).toBeTruthy();
  });
});
