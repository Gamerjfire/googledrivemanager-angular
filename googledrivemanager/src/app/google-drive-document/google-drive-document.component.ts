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
import { delay } from 'rxjs';

@Component({
  selector: 'google-drive-documents',
  standalone: true,
  imports: [CommonModule, MatTableModule, GoogleUploadComponent, RouterOutlet],
  templateUrl: './google-drive-document.component.html',
  styleUrl: './google-drive-document.component.css'
})
export class GoogleDriveDocumentComponent {
  allDriveDocuments: any = null;
  retryCount:any = 3;
  status:String = ""
  rowsToDisplay=["name","mimeType","modifiedDate", "delete", "download"]
  private authService = inject(AuthGoogleService);
  private router = inject(Router);
  private googleService = inject(GoogleDriveFunctionService)

  //Load it in a state of "Wait for content"
  ngOnInit(): void{
    this.status ='Loading'
  }

  //After Drop page is created, give content read
  ngAfterContentInit(): void{
    this.getData();
  }

  async getData(){
    //Giving it 3 Retries in case of inconsistent error.
    for(let count=0;count<this.retryCount; count++){
      this.allDriveDocuments = (await this.googleService.googleDriveList()).files;
      if(this.allDriveDocuments){
        this.status = 'Loaded'
        break;
      }
      delay(1000);
    }
  }

  deleteThis(documentId: String){
    console.log("Deleted");
  }

  download(documentId: String){
    console.log("Downloaded");
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
