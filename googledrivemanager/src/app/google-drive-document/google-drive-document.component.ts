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
import { firstValueFrom } from 'rxjs';
import { saveAs } from 'file-saver';

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

  public async getData(){
    //Giving it 3 Retries in case of inconsistent error.
    for(let count=0;count<this.retryCount; count++){
      try{
        this.allDriveDocuments = (await this.googleService.googleDriveList()).files;
      } catch {
        console.log("Retry " + count + " completed, continuing attempts.")
      }
      if(this.allDriveDocuments!=null){
        this.status = 'Loaded'
        break;
      }
      delay(1000);
    }
  }

  async deleteThis(documentId: String){
    await firstValueFrom(this.googleService.googleDriveDelete(documentId));
    this.getData();
  }

  async download(documentId: String, documentName: string, type: string){
    var result;
    if(type == "application/json"){
      var tempresult = await firstValueFrom(this.googleService.googleDriveDownloadJson(documentId));
      result = new Blob([JSON.stringify(tempresult)],{type:"application/json"})
    } else if(type=="application/vnd.google-apps.document"){
      result = await firstValueFrom(this.googleService.googleDriveExportToWord(documentId));
    } else if(type=="application/vnd.google-apps.spreadsheet"){
      result = await firstValueFrom(this.googleService.googleDriveExportToExcel(documentId));
    } else {
      result = await firstValueFrom(this.googleService.googleDriveDownloadBlob(documentId));
    }
    saveAs(result, documentName);
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
