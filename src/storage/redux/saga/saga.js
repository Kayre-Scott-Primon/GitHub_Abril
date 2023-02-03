import { call, takeEvery, put } from 'redux-saga/effects'
import { setRespository } from '../reducer/repositorySlice'
import { sagaActions } from './sagaActions'
import api from '../../../services/api'

export function* getRepositorySaga() {
  try {
    let result = yield call((term) => {
        api.get(`search/repositories?q=${term}&per_page=10`)
      }
    )
    console.log('test', result.data.items[1].name)
    yield put(setRespository({
      title: result.data.items[0].name,
      url: result.data.items[0].html_url,
      owner: result.data.items[0].owner.login,
      stars: result.data.items[0].stargazers_count
  }))
  } catch (e) {
    yield put({ type: 'REPOSITORY_SAGA_FAILED' })
  }
}
export default function* rootSaga() {
  yield takeEvery(sagaActions.REPOSITORY_SAGA_FAILED, getRepositorySaga)
}