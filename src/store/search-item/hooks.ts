import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useLocation } from 'react-router';
import { getSearchItemRequest } from './actions';
import { IGeneralMessage } from 'src/types/global';
import {
  searchItemDataSelector,
  searchItemErrorSelector,
  searchItemLoadingSelector
} from './selectors';
import { ISearchItem } from './types';

export const useSelectSearchItem: () => ISearchItem | undefined = () => {
  return useSelector(searchItemDataSelector);
};

export const useSelectSearchItemLoading: () => boolean = () => {
  return useSelector(searchItemLoadingSelector);
};

export const useSelectSearchItemError: () => IGeneralMessage = () => {
  return useSelector(searchItemErrorSelector);
};

export function useGetSearchItem(): (id: string) => void {
  const dispatch = useDispatch();
  return useCallback(
    (id: string) => {
      dispatch(getSearchItemRequest({ id }));
    },
    [dispatch]
  );
}

export const useSelectRouterPathSearchItemID: () => string = () => {
  const { pathname } = useLocation();
  const pathNameArray: string[] = pathname.split('/');
  const path = pathNameArray[pathNameArray.length - 1];
  return path;
};
