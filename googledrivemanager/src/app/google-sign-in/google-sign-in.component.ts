import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthGoogleService } from '../services/auth-google-service.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'google-sign-in',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './google-sign-in.component.html',
  styleUrl: './google-sign-in.component.css'
})
export class GoogleSignInComponent {
  private authService = inject(AuthGoogleService);

  signInWithGoogle(){
    this.authService.login();
  }

}
