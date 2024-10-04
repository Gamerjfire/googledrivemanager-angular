import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { AuthGoogleService } from './auth-google-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriveResponse } from '../model/DriveResponse';
import { DriveDocument } from '../model/DriveDocument';
import { environment } from '../../config';

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
        //Limited to my Email for the sake of testing currently.
        return this.httpclient.get<DriveResponse>('https://www.googleapis.com/drive/v3/files?fields=*&key='+environment.apiKey+'&q=%27judson.stangler%40gmail.com%27%20in%20owners', {headers: new HttpHeaders().set('Authorization','Bearer '+ this.authService.getToken())})
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

    googleDriveTimeFetcher(id:String):Observable<any>{
        return this.httpclient.get('https://www.googleapis.com/drive/v3/files/'+id+'?alt=media&key='+environment.apiKey, {headers: new HttpHeaders().set('Authorization','Bearer '+ this.authService.getToken()), responseType:'blob'})
    }

    googleDriveUpload(dataToUpload:any): Observable<Object>{
        console.log(dataToUpload);
        dataToUpload.mimeType=dataToUpload.type;
        dataToUpload.fileName=dataToUpload.name;
        dataToUpload.title=dataToUpload.name;
        console.log(dataToUpload);
        var endpoint = "https://www.googleapis.com/upload/drive/v3/files?key="+environment.apiKey
        //Set up dataToUpload
        if(dataToUpload.size < 5000000){
            endpoint+="&uploadType=multipart"
        } else {
            endpoint+="&uploadType=resumable"
        }
        return this.httpclient.post(endpoint, dataToUpload, {headers: new HttpHeaders().set('Authorization','Bearer '+ this.authService.getToken())
            .set("Content-Type",dataToUpload.type)
            .set("Content-Length",dataToUpload.size.toString())
            .set("Content-Disposition",'attachment; filename="JudsonFileName"')})
    }

    googleDriveDelete(id:String): Observable<any>{
        return this.httpclient.delete('https://www.googleapis.com/drive/v2/files/'+id+'?'+environment.apiKey, {headers: new HttpHeaders()
            .set('Authorization','Bearer '+ this.authService.getToken())})
    }

    googleDriveDownloadBlob(id:String): Observable<any>{
        return this.httpclient.get('https://www.googleapis.com/drive/v3/files/'+id+'?alt=media&key='+environment.apiKey, {headers: new HttpHeaders()
            .set('Authorization','Bearer '+ this.authService.getToken()), responseType:'blob'})
    }

    googleDriveDownloadJson(id:String): Observable<any>{
        return this.httpclient.get('https://www.googleapis.com/drive/v3/files/'+id+'?alt=media&key='+environment.apiKey, {headers: new HttpHeaders()
            .set('Authorization','Bearer '+ this.authService.getToken()), responseType:'json'})
    }

    googleDriveExportToWord(id:String): Observable<any>{
        return this.httpclient.get('https://www.googleapis.com/drive/v3/files/'+id+'/export?mimeType=application%2Fvnd.openxmlformats-officedocument.wordprocessingml.document&key='+environment.apiKey, {headers: new HttpHeaders()
            .set('Authorization','Bearer '+ this.authService.getToken()), responseType:'blob'})
    }

    googleDriveExportToExcel(id:String): Observable<any>{
        return this.httpclient.get('https://www.googleapis.com/drive/v3/files/'+id+'/export?mimeType=application%2Fvnd.openxmlformats-officedocument.spreadsheetml.sheet&key='+environment.apiKey, {headers: new HttpHeaders()
            .set('Authorization','Bearer '+ this.authService.getToken()), responseType:'blob'})
    }
}