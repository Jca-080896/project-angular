import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service.service';
describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService); // Aquí también usamos UserService en lugar de UserServiceService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
