export class Message {
  id: string;
  subjectId: string;
  categoryId: string = "";
  retroId: string;
  clientuniqueid: string;
  type: string;
  messageText: string;
  date: Date;
  comments = [];
  isCategorized: boolean;
  commentCount:number;
  userId:string;
}
