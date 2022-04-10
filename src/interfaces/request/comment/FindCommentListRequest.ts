import { Request } from "express";


export interface FindCommentListParams {
  limit?: number;
  pageNumber?: number;
}


export type FindCommentListRequest = Request<FindCommentListParams>;
