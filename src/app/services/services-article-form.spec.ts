import { TestBed } from '@angular/core/testing';

import { ServicesArticleForm } from './services-article-form';

describe('ServicesArticleForm', () => {
  let service: ServicesArticleForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesArticleForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
