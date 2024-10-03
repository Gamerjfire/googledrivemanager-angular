export class DriveDocument {
    name: string;
    type: string;
    modifiedDate: Date;
  
    constructor(name: string, type:string, modifiedDate:Date){
      this.name = name;
      this.type = type;
      this.modifiedDate = modifiedDate;
    }
}