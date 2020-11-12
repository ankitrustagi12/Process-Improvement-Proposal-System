import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ValidateTokenService } from './validate-token.service';

describe('HttpInterceptorService', () => {
  let service: ValidateTokenService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ValidateTokenService]
    });
    service = TestBed.inject(ValidateTokenService);
    httpClient=TestBed.inject(HttpClient)
    httpTestingController=TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});