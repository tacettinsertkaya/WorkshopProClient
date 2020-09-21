import { Category } from "../category";
import { Message } from "../message";

export class CategorizedMessage {
  category: Category;
  categoryMessages: Array<Message>;
}
