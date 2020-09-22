import { Category } from "../category";
import { Message } from "../message";

export class CategorizedMessage {
  category: Category;
  messages: Array<Message> = new Array<Message>();
}
