import { Category } from "./Category";
import { Status } from "./Status";

export interface News {
  id: string;
  newsUid: string;
  title: string;
  synopsis: string;
  images: string[];
  content: string;
  category: Category;
  date: Date;
  reason: string;
  status: Status
}
