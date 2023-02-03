const REPOSITORY_SAGA_SUCCESS = 'REPOSITORY_SAGA_SUCCESS'

export const sagaActions = (data) => ({
    type: REPOSITORY_SAGA_SUCCESS,
    payload: data,
  });