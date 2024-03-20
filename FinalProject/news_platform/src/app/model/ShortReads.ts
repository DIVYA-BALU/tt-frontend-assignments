import { Category } from "./Category";
import { Status } from "./Status";

export interface ShortReads {
  id: string;
  shortReadsUid: string;
  title: string;
  image: string;
  content: string;
  category: Category;
  date: Date;
  reason: string;
  status: Status;
}
