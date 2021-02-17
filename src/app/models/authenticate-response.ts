import { Company } from "./company";

export class AuthenticateResponse{
    userId:string;
    userName:string;
    name:string;
    surname:string;
    token:string;
    expiration:Date;
    companyId:string;
    company:Company;
    roles:Array<string>=[];
}