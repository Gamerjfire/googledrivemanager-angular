import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoogleDriveDocumentComponent } from './google-drive-document/google-drive-document.component';
import { GoogleSignInComponent } from "./google-sign-in/google-sign-in.component";
import { GoogleUploadComponent } from "./google-upload/google-upload.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, GoogleDriveDocumentComponent, GoogleSignInComponent, GoogleUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'googledrivemanager';
}
