import { call, takeEvery, put } from 'redux-saga/effects'
import { setRespository } from '../reducer/repositorySlice'
import api from '../../../services/api'

function callApi(data){
  return api.get(`repos/${data.owner}/${data.name}`)
}

export function* getRepositorySaga(action) {
  try {
    let result = yield call(callApi, action.payload)
    yield put(setRespository({
      title: result.data.name,
      url: result.data.html_url,
      owner: result.data.owner.login,
      stars: result.data.stargazers_count
  }))
  } catch (e) {
    //yield put({ type: 'REPOSITORY_SAGA_FAILED', payload: {owner: '', name: ''} })
  }
}
export default function* rootSaga() {
  yield takeEvery('REPOSITORY_SAGA_SUCCESS', getRepositorySaga)
}