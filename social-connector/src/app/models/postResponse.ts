import { pageResponse } from "./pageResponse";

export interface postResponse {
  _id: string;
  pageId: pageResponse;
  mediaUrl: string;
  primary_poster: string;
  likeCount: number;
  commentCount: number;
  caption: string;
  date_and_time: Date;
}

export interface postUpload{
  pageId :string,
  media:any,
  primary_poster:string, 
  caption:string, 
}

export interface postReport{
  postId:postResponse,
  pageId:pageResponse
}