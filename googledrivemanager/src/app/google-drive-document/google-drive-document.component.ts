import { Component } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { DriveDocument } from '../model/DriveDocument';
import { inject } from '@angular/core';
import { GoogleUploadComponent } from "../google-upload/google-upload.component";
import { AuthGoogleService } from '../services/auth-google-service.service';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { GoogleDriveFunctionService } from '../services/google-drive-services.service';

@Component({
  selector: 'google-drive-documents',
  standalone: true,
  imports: [CommonModule, MatTableModule, GoogleUploadComponent, RouterOutlet],
  templateUrl: './google-drive-document.component.html',
  styleUrl: './google-drive-document.component.css'
})
export class GoogleDriveDocumentComponent {
  allDriveDocuments: any = [
    {name: "Document 1", mimeType: "Word Document", modifiedDate: Date.now()},
    {name: "Document 2", mimeType: "PDF Document", modifiedDate: Date.now()},
    {name: "Document 3", mimeType: "Word Document", modifiedDate: Date.now()}
  ];
  rowsToDisplay=["name","mimeType","modifiedDate", "delete", "download"]
  private authService = inject(AuthGoogleService);
  private router = inject(Router);
  private googleService = inject(GoogleDriveFunctionService)

  ngOnInit(): void{
    this.getData();
  }

  async getData(){
    //TODO Fetch Drive Documents
    this.allDriveDocuments = (await this.googleService.googleDriveList()).files;
    console.log(this.allDriveDocuments);
  }

  deleteThis(){
    console.log("Deleted");
  }

  download(){
    console.log("Downloaded");
    this.googleService.googleDriveList();
  }

  logOut(){
   this.authService.logout();
  }
}
