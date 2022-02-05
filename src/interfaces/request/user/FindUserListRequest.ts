import { Request } from "express";


export interface FindUserListParams {
  paginationPageNumber?: number;
  itemsCountPerPaginationPage?: number;
  searchByUserName?: string;
}


export type FindUserListRequest = Request<FindUserListParams>;