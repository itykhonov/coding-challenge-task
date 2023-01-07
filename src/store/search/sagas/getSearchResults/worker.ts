import { GetSearchItemsRequestType } from '../../types';
import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { getSearchItemsFailure, getSearchItemsSuccess } from '../../actions';
import { getSearchItems } from 'src/services/api';
import { ISearchItem } from 'src/store/search-item/types';

export function* getSearchItemsWorker({
  payload: { searchString, page }
}: GetSearchItemsRequestType): SagaIterator {
  try {
    const result = yield call(getSearchItems, searchString, page);
    if (result) {
      const { page, results, total_pages } = result.data as {
        page: number;
        results: ISearchItem[];
        total_pages: number;
        total_results: number;
      };

      yield put(
        getSearchItemsSuccess({
          data: {
            searchItems: results
          },
          currentPage: page,
          pagesCount: total_pages,
          limit: 20
        })
      );
    } else {
      yield put(
        getSearchItemsFailure({
          error: { message: 'No results SEARCH_ITEMS' }
        })
      );
    }
  } catch (error: unknown) {
    yield put(getSearchItemsFailure({ error: error as { message: string } }));
  }
}
