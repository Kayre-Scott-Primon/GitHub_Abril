export const sagaActions = {
    REPOSITORY_SAGA_FAILED: 'REPOSITORY_SAGA_FAILED',
}

export const repository = (term) => ({ type: REPOSITORY_SAGA_FAILED, term })