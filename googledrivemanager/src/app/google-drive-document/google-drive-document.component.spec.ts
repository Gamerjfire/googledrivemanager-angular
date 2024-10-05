import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDriveDocumentComponent } from './google-drive-document.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { GoogleDriveFunctionService } from '../services/google-drive-services.service';
import { provideHttpClient } from '@angular/common/http';
import { AuthGoogleService } from '../services/auth-google-service.service';
import { DateTimeProvider, OAuthLogger, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';

describe('GoogleDriveDocumentComponent', () => {
  let component: GoogleDriveDocumentComponent;
  let fixture: ComponentFixture<GoogleDriveDocumentComponent>;
  let functionService: GoogleDriveFunctionService;
  let authService: AuthGoogleService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleDriveDocumentComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(),
        GoogleDriveFunctionService, OAuthService, UrlHelperService, OAuthLogger, DateTimeProvider]
    })
    .compileComponents();

    functionService = TestBed.inject(GoogleDriveFunctionService);
    authService = TestBed.inject(AuthGoogleService);

    fixture = TestBed.createComponent(GoogleDriveDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(functionService).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
