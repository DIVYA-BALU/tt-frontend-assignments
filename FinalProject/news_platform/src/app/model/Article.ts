import { Category } from "./Category";
import { Status } from "./Status";

export interface Article {
  id: string;
  articleUid: string;
  title: string;
  images: string[];
  content: string;
  category: Category;
  date: Date;
  reason: string;
  status: Status;
}
