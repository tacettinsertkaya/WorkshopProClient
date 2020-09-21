import { Message } from "./message";


export class Categorized {
  id: string;
  title: string;
  messages:  Array<Message> = [];
}
