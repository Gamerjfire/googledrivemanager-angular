export class DriveDocument {
    id: string;
    name: string;
    mimeType: string;
    modifiedTime: Date;
  
    constructor(id:string, name: string, mimeType:string, modifiedDate:Date){
      this.id = id;
      this.name = name;
      this.mimeType = mimeType;
      this.modifiedTime = modifiedDate;
    }
}