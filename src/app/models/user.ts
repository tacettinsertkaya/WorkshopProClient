export class User {
    id:string;
    name: string;
    surname: string;
    userName: string;
    email: string;
    phone: string;
    rawPassword: string;
    token:string;
    statu:string;
    roles:Array<string>=[];
    companyId:string='';

  }
  