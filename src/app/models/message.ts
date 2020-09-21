export class Message {
  id: string;
  subjectId: string;
  clientuniqueid: string;
  type: string;
  messageText: string;
  date: Date;
  comments = [];
  isCategorized: boolean;
}
