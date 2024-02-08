import { pageResponse } from "./pageResponse";

export interface postResponse {
  _id: string;
  pageId: pageResponse;
  mediaUrl: string;
  primary_poster: string;
  likeCount: string;
  commentCount: string;
  caption: string;
  date_and_time: Date;
}
