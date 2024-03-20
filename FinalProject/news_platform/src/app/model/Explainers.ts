import { Status } from "./Status";

export interface Explainers {
    id: string;
    explainersUid: string;
    title: string;
    image: string;
    content: string;
    date: Date;
    reason: string;
    status: Status;
  }
  