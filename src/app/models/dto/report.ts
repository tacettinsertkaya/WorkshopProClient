import { Categorized } from "../categorized";
import { Category } from "../category";
import { Message } from "../message";
import { Subject } from "../subject";

export class Report {
    subject:Subject;
    categoryMessages:Array<Categorized>=[];
}