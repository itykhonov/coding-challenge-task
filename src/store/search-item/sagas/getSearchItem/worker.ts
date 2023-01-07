import { GetSearchItemRequestType } from '../../types';
import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { getSearchItemFailure, getSearchItemSuccess } from '../../actions';
import { getSearchItem } from 'src/services/api';

export function* getSearchItemWorker({
  payload: { id }
}: GetSearchItemRequestType): SagaIterator {
  try {
    const result = yield call(getSearchItem, id);
    console.log(result);
    if (result) {
      yield put(getSearchItemSuccess({ data: result.data }));
    } else {
      yield put(
        getSearchItemFailure({
          error: { message: 'No results GET_SEARCH_ITEM_BY_ID' }
        })
      );
    }
  } catch (error: unknown) {
    yield put(getSearchItemFailure({ error: error as { message: string } }));
  }
}
