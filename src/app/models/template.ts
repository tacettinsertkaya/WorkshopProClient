import { TemplateDetail } from "./template-detail";

export class Template {
  companyId:string;
  id: string;
  templateName: string;
  templateDetail: Array<TemplateDetail> = [];
  userId:string;
  createRole:string="Admin";

}
