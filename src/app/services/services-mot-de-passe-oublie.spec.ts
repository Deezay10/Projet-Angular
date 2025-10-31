import { TestBed } from '@angular/core/testing';

import { ServicesMotDePasseOublie } from './services-mot-de-passe-oublie';

describe('ServicesMotDePasseOublie', () => {
  let service: ServicesMotDePasseOublie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesMotDePasseOublie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
