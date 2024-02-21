import { pageResponse } from "./pageResponse";

export interface commentBody{
    postOrCommentId:string,
    type:string,
    pageId:pageResponse
    comment:string,
}

export interface postToComment{
    postId:string,
    url:string
}