import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { AuthGoogleService } from './auth-google-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveFunctionService{
    private authService = inject(AuthGoogleService);

    constructor(private httpclient:HttpClient){}
    headers = new HttpHeaders().set('Authorization',`Bearer ${this.authService.getToken()}`)

    httpOptions = {headers: this.headers}
    googleDriveList(){
        this.authService.getProfile();
        this.httpclient.get('https://www.googleapis.com/drive/v3/files?key=AIzaSyCEkd2-lZvMICEo2OI-Nn6OYmOWGMGHw64', this.httpOptions).subscribe({

        })
    }
    googleDriveUpload(){

    }
    googleDriveDelete(id:String){

    }
}