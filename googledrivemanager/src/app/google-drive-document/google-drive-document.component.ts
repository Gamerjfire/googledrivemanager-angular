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
  allDriveDocuments: any;
  rowsToDisplay=["name","type","modifiedDate", "delete", "download"]
  private authService = inject(AuthGoogleService);
  private router = inject(Router);
  private googleService = inject(GoogleDriveFunctionService)

  ngOnInit(): void{
    this.getData();
  }

  getData(){
    //TODO Fetch Drive Documents
    this.googleService.googleDriveList();
    this.allDriveDocuments= [
      {name: "Document 1", type: "Word Document", modifiedDate: Date.now()},
      {name: "Document 2", type: "PDF Document", modifiedDate: Date.now()},
      {name: "Document 3", type: "Word Document", modifiedDate: Date.now()}
    ]
  }

  deleteThis(){
    console.log("Deleted");
  }

  download(){
    console.log("Downloaded");
  }
  //No current need for logout but in case it is a need later
  //logOut(){
  //  this.authService.logOut();
  //}
}
