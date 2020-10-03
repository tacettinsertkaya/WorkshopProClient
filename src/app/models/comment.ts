
import { Message } from "../models/message";

export class Comment {
  id: string;
  messageId: string;
  retroId: string;
  commentText: string;
  message: Message;
  date: Date;
}
