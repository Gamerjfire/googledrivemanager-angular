import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthConfig } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {
    private oAuthService = inject(OAuthService)
    private route = inject(Router)

    constructor() {
      this.initConfiguration();
    }

    initConfiguration(){
      const authConfig: AuthConfig = {
        issuer: 'https://accounts.google.com',
        strictDiscoveryDocumentValidation: false,
        clientId: '800847990228-a27nh4ndjgg8snavo4g8nb74rt61qfvk.apps.googleusercontent.com',
        redirectUri: 'https://localhost:4200/manager',
        scope: "https://www.googleapis.com/auth/drive"
      };

      this.oAuthService.configure(authConfig);
      this.oAuthService.setupAutomaticSilentRefresh();
      this.oAuthService.loadDiscoveryDocument();
    }

    login(){
      this.oAuthService.initImplicitFlow();
    }

    logout(){
      this.oAuthService.revokeTokenAndLogout();
      this.oAuthService.logOut();
    }

    getProfile(){
      console.log(this.oAuthService.getIdentityClaims());
      return this.oAuthService.getIdentityClaims();
    }

    getToken(){
      return this.oAuthService.getAccessToken();
    }
}