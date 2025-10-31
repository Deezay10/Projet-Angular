import { TestBed } from '@angular/core/testing';

import { ServicesConnexion } from './services-connexion';

describe('ServicesConnexion', () => {
  let service: ServicesConnexion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesConnexion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
