import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { GoogleDriveFunctionService } from '../services/google-drive-services.service';
import { CommonModule } from '@angular/common';
import { firstValueFrom} from 'rxjs';


@Component({
  selector: 'google-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-upload.component.html',
  styleUrl: './google-upload.component.css'
})
export class GoogleUploadComponent {
  private googleService = inject(GoogleDriveFunctionService)
  file:File | null = null;

  async uploadToGoogleDrive(){
    if(this.file == null){
      console.log("No data present, ignoring call.")
    } else {
      console.log("Attempting to upload to googleDrive");
      var returned = await firstValueFrom(this.googleService.googleDriveUpload(this.file));
      this.file=null;
    }
  }

  setDataToUpload(event: any){
    var chosenFile:File = event.target.files[0];
    if(chosenFile){
      this.file = chosenFile;
    }
  }

}
