import {DriveDocument} from "./DriveDocument";

export class DriveResponse {
    files: DriveDocument[];
    incompleteSearch: boolean;
    kind:String;
    nextPageToken:String;

    constructor(files:DriveDocument[], incompleteSearch: boolean, kind:String, nextPageToken:String, webContentLink: String){
        this.files=files;
        this.incompleteSearch=incompleteSearch;
        this.kind=kind;
        this.nextPageToken=nextPageToken;
    }
}