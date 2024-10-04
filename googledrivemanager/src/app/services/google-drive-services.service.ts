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
                console.log(data)
                //var dataList = JSON.parse(data);
                //return dataList;
                return data;
            } else {
                throw "Data Not Found"
            }
        });
    }

    googleDriveUpload(){

    }
    googleDriveDelete(id:String){

    }
}