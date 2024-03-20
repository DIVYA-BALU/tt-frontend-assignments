import { Status } from "./Status";

export interface UserNews {
  id: string
  name: string;
  email: string;
  phoneNo: string;
  images: string[];
  date: Date;
  content: string;
  status: Status;
}
