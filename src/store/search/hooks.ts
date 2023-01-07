import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IGeneralMessage } from 'src/types/global';
import { ISearchItem } from '../search-item/types';
import { getSearchItemsRequest } from './actions';
import {
  searchItemsSelector,
  getSearchItemsPagesCountSelector,
  searchItemsErrorSelector,
  searchItemsLoadingSelector,
  searchItemsCurrentPageSelector,
  searchItemsSearchStringSelector,
  searchLimitSelector
} from './selectors';

export const useSelectSearchItems: () => ISearchItem[] = () => {
  return useSelector(searchItemsSelector);
};

export const useSelectSearchItemsLoading: () => boolean = () => {
  return useSelector(searchItemsLoadingSelector);
};

export const useSelectSearchItemsError: () => IGeneralMessage = () => {
  return useSelector(searchItemsErrorSelector);
};

export const useSelectSearchItemsCurrentPage: () => number = () => {
  return useSelector(searchItemsCurrentPageSelector);
};

export const useSelectSearchItemsPagesCount: () => number = () => {
  return useSelector(getSearchItemsPagesCountSelector);
};

export const useGetSearchItems: () => (
  searchString: string,
  page: number
) => void = () => {
  const dispatch = useDispatch();
  return useCallback(
    (searchString: string, page: number) => {
      dispatch(getSearchItemsRequest({ searchString, page }));
    },
    [dispatch]
  );
};

export const useSelectSearchString: () => string = () => {
  return useSelector(searchItemsSearchStringSelector);
};

export const useSelectSearchLimit: () => number = () => {
  return useSelector(searchLimitSelector);
};
