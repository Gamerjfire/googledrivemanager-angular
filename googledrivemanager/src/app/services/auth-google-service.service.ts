import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { AuthConfig } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {
    private oAuthService = inject(OAuthService)
    private route = inject(Router)

    constructor(private httpclient:HttpClient) {
      this.initConfiguration();
    }

    initConfiguration(){
      const authConfig: AuthConfig = {
        issuer: 'https://accounts.google.com',
        strictDiscoveryDocumentValidation: false,
        responseType: 'token id_token',
        clientId: '800847990228-a27nh4ndjgg8snavo4g8nb74rt61qfvk.apps.googleusercontent.com',
        redirectUri: 'https://localhost:4200/manager',
        scope: 'https://www.googleapis.com/auth/drive'
      };

      this.oAuthService.configure(authConfig);
      this.oAuthService.setupAutomaticSilentRefresh();
      this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    }

    login(){
      this.oAuthService.initLoginFlow();
    }

    logout(){
      this.oAuthService.revokeTokenAndLogout();
      this.oAuthService.logOut();
    }

    getProfile(){
      return this.oAuthService.getIdentityClaims();
    }

    getToken(){
      return this.oAuthService.getAccessToken();
    }
}