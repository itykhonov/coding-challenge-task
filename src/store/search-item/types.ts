import { IGeneralMessage, IGeneralMessageResponse } from 'src/types/global';
import {
  GET_SEARCH_ITEM_FAILURE,
  GET_SEARCH_ITEM_REQUEST,
  GET_SEARCH_ITEM_SUCCESS
} from './actionTypes';

export interface ISearchItem {
  id: number;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  homepage: string;
  budget: number;
  status: string;
  tagline: string;
  revenue: number;
  runtime: number;
  production_companies: ICompany[];
  production_countries: ICountry[];
  spoken_languages: ILanguage[];
}

export interface ILanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ICountry {
  iso_3166_1: string;
  name: string;
}

export interface ICompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ISearchItemState {
  data: ISearchItem | undefined;
  loading: boolean;
  error: IGeneralMessage;
}

export interface ISearchItemRequestPayload {
  id: string;
}

export interface ISearchItemSuccessPayload {
  data: ISearchItem | undefined;
}

export interface ISearchItemFailurePayload {
  error: IGeneralMessageResponse;
}

export type GetSearchItemRequestType = {
  type: typeof GET_SEARCH_ITEM_REQUEST;
  payload: ISearchItemRequestPayload;
};

export type GetSearchItemSuccessType = {
  type: typeof GET_SEARCH_ITEM_SUCCESS;
  payload: ISearchItemSuccessPayload;
};

export type GetSearchItemFailureType = {
  type: typeof GET_SEARCH_ITEM_FAILURE;
  payload: ISearchItemFailurePayload;
};

export type SearchItemActionsTypes =
  | GetSearchItemRequestType
  | GetSearchItemSuccessType
  | GetSearchItemFailureType;
