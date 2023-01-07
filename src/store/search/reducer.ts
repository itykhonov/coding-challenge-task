import {
  GET_SEARCH_ITEMS_FAILURE,
  GET_SEARCH_ITEMS_REQUEST,
  GET_SEARCH_ITEMS_SUCCESS
} from './actionTypes';

import { ISearchItemsState, SearchActionsTypes } from './types';

const initialState: ISearchItemsState = {
  loading: false,
  error: '',
  data: {
    searchItems: []
  },
  currentPage: 0,
  pagesCount: 0,
  limit: 0,
  searchString: ''
};

export default (
  state = initialState,
  action: SearchActionsTypes
): ISearchItemsState => {
  switch (action.type) {
    case GET_SEARCH_ITEMS_REQUEST:
      return {
        ...state,
        searchString: action.payload.searchString,
        data: {
          ...state.data,
          searchItems: []
        },
        loading: true
      };
    case GET_SEARCH_ITEMS_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.data
        },
        currentPage: action.payload.currentPage,
        pagesCount: action.payload.pagesCount,
        limit: action.payload.limit,
        loading: false
      };
    case GET_SEARCH_ITEMS_FAILURE:
      return {
        ...initialState,
        error: action.payload.error.message
      };
    default:
      return {
        ...state
      };
  }
};
