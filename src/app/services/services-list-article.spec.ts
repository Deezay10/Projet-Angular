import { TestBed } from '@angular/core/testing';

import { ServicesListArticle } from './services-list-article';

describe('ServicesListArticle', () => {
  let service: ServicesListArticle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesListArticle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
