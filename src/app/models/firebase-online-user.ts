import { Company } from "./company";

export class FirebaseOnlineUser{
    userId:string;
    userName:string;
    name:string;
    surname:string;
    token:string;
    expiration:Date;
    companyId:string;
    company:Company;
    roles:Array<string>=[];
    retroId:string;
}