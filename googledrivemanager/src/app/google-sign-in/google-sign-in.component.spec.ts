import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSignInComponent } from './google-sign-in.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AuthGoogleService } from '../services/auth-google-service.service';
import { provideHttpClient } from '@angular/common/http';
import { GoogleDriveFunctionService } from '../services/google-drive-services.service';
import { DateTimeProvider, OAuthLogger, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';

describe('GoogleSignInComponent', () => {
  let component: GoogleSignInComponent;
  let fixture: ComponentFixture<GoogleSignInComponent>;
  let authService: AuthGoogleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleSignInComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(),
        GoogleDriveFunctionService, OAuthService, UrlHelperService, OAuthLogger, DateTimeProvider]
    })
    .compileComponents();

    authService = TestBed.inject(AuthGoogleService);
    fixture = TestBed.createComponent(GoogleSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
