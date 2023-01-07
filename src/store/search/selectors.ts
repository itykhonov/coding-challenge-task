import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getSearchItems = (state: AppState) => state.search.data.searchItems;
const getErrorSearchItems = (state: AppState) => state.search.error;
const getLoadingSearchItems = (state: AppState) => state.search.loading;
const getSearchItemsCurrentPage = (state: AppState) => state.search.currentPage;
const getSearchLimit = (state: AppState) => state.search.limit;
const getSearchItemsPagesCount = (state: AppState) => state.search.pagesCount;
const getSearchString = (state: AppState) => state.search.searchString;

export const searchItemsSelector = createSelector(
  getSearchItems,
  (searchItems) => searchItems
);

export const searchItemsErrorSelector = createSelector(
  getErrorSearchItems,
  (error) => error
);

export const searchItemsLoadingSelector = createSelector(
  getLoadingSearchItems,
  (loading) => loading
);

export const searchItemsCurrentPageSelector = createSelector(
  getSearchItemsCurrentPage,
  (offset) => offset
);

export const getSearchItemsPagesCountSelector = createSelector(
  getSearchItemsPagesCount,
  (totalCount) => totalCount
);

export const searchItemsSearchStringSelector = createSelector(
  getSearchString,
  (string) => string
);

export const searchLimitSelector = createSelector(
  getSearchLimit,
  (limit) => limit
);
