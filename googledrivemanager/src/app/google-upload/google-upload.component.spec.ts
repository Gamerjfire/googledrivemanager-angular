import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleUploadComponent } from './google-upload.component';
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { GoogleDriveFunctionService } from '../services/google-drive-services.service';
import { provideHttpClient } from '@angular/common/http';
import { DateTimeProvider, OAuthLogger, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs';

describe('GoogleUploadComponent', () => {
  let component: GoogleUploadComponent;
  let fixture: ComponentFixture<GoogleUploadComponent>;
  let functionService: GoogleDriveFunctionService;
  let oAtuhFunctionService: OAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleUploadComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(),
        GoogleDriveFunctionService, OAuthService, UrlHelperService, OAuthLogger, DateTimeProvider]
    })
    .compileComponents();

    functionService = TestBed.inject(GoogleDriveFunctionService);
    oAtuhFunctionService = TestBed.inject(OAuthService);
    fixture = TestBed.createComponent(GoogleUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
