import { TestBed } from '@angular/core/testing';

import { ServicesDetailArticle } from './services-detail-article';

describe('ServicesDetailArticle', () => {
  let service: ServicesDetailArticle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesDetailArticle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
