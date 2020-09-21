export class Message {
  id: string;
  subjectId: string;
  categoryId: string = "";
  clientuniqueid: string;
  type: string;
  messageText: string;
  date: Date;
  comments = [];
  isCategorized: boolean;
}
