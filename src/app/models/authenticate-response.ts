import { Company } from "./company";

export class AuthenticateResponse{
    userId:string;
    userName:string;
    token:string;
    expiration:Date;
    companyId:string;
    company:Company;
    roles:Array<string>=[];
}