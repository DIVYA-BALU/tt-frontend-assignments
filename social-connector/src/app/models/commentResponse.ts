import { pageResponse } from "./pageResponse";

export interface commentResponse{
    _id:string,
    postOrCommentId:string,
    type:string,
    pageId:pageResponse,
    comment:string,
    likeCount:number,
    commentCount:number
}