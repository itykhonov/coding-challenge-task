import { IGeneralMessage, IGeneralMessageResponse } from 'src/types/global';
import { ISearchItem } from '../search-item/types';
import {
  GET_SEARCH_ITEMS_FAILURE,
  GET_SEARCH_ITEMS_REQUEST,
  GET_SEARCH_ITEMS_SUCCESS
} from './actionTypes';

export interface ISearchItems {
  searchItems: ISearchItem[];
}

export interface ISearchItemsState {
  data: ISearchItems;
  loading: boolean;
  error: IGeneralMessage;
  currentPage: number;
  pagesCount: number;
  searchString: string;
  limit: number;
}

export interface ISearchItemsRequestPayload {
  searchString: string;
  page: number;
}

export interface ISearchItemsSuccessPayload {
  data: ISearchItems;
  currentPage: number;
  pagesCount: number;
  limit: number;
}

export interface ISearchItemsFailurePayload {
  error: IGeneralMessageResponse;
}

export type GetSearchItemsRequestType = {
  type: typeof GET_SEARCH_ITEMS_REQUEST;
  payload: ISearchItemsRequestPayload;
};

export type GetSearchItemsSuccessType = {
  type: typeof GET_SEARCH_ITEMS_SUCCESS;
  payload: ISearchItemsSuccessPayload;
};

export type GetSearchItemsFailureType = {
  type: typeof GET_SEARCH_ITEMS_FAILURE;
  payload: ISearchItemsFailurePayload;
};

export type SearchActionsTypes =
  | GetSearchItemsRequestType
  | GetSearchItemsSuccessType
  | GetSearchItemsFailureType;
