import { TemplateDetail } from "./template-detail";

export class Template {
  id: string;
  templateName: string;
  templateDetail: Array<TemplateDetail> = [];
}
