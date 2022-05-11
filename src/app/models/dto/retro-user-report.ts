import { Retro } from "../retro";
import { User } from "../user";

export class  RetroUserReport{
    retro:Retro;
    user:User;
    startDate:Date=new Date();
    endDate:Date=new Date();
}