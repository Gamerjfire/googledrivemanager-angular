import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { AuthGoogleService } from './auth-google-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DriveDocument } from '../model/DriveDocument';
import { Observable } from 'rxjs';
import { DriveResponse } from '../model/DriveResponse';

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveFunctionService{
    private authService = inject(AuthGoogleService);
    private headers = new HttpHeaders;
    constructor(private httpclient:HttpClient){
        this.headers = new HttpHeaders().set('Authorization','Bearer '+ this.authService.getToken())
    }
    
    //Should return response as it can then populate data afterwards in the table.
    googleDriveList(): Promise<DriveResponse>{
        return this.httpclient.get<DriveResponse>('https://www.googleapis.com/drive/v3/files?key=AIzaSyCEkd2-lZvMICEo2OI-Nn6OYmOWGMGHw64', {headers: new HttpHeaders().set('Authorization','Bearer '+ this.authService.getToken())})
        .toPromise()
        .catch()
        .then((data) => {
            if(data){
                return data;
            } else {
                throw "Data Not Found"
            }
        });
    }

    googleDriveUpload(dataToUpload:File): Observable<Object>{
        var endpoint = "https://www.googleapis.com/upload/drive/v3/files?key=AIzaSyCEkd2-lZvMICEo2OI-Nn6OYmOWGMGHw64"
        //Set up dataToUpload
        console.log(dataToUpload.size)
        if(dataToUpload.size < 5000000){
            endpoint+="&uploadType=multipart"
        } else {
            endpoint+="&uploadType=resumable"
        }
        this.headers.append
        console.log(endpoint)
        console.log(dataToUpload)
        return this.httpclient.post(endpoint, dataToUpload, {headers: new HttpHeaders().set('Authorization','Bearer '+ this.authService.getToken()).set("Content-Type",dataToUpload.type).set("Content-Length",dataToUpload.size.toString())})
    }

    googleDriveDelete(id:String){
        
    }

    googleDriveDownload(id:String): Observable<Blob>{
        return this.httpclient.get<Blob>('https://www.googleapis.com/drive/v3/files?key=AIzaSyCEkd2-lZvMICEo2OI-Nn6OYmOWGMGHw64', {headers: new HttpHeaders().set('Authorization','Bearer '+ this.authService.getToken())})
    }
}