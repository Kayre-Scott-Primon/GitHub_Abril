import { configureStore } from "@reduxjs/toolkit";
import repository from "./reducer/repositorySlice";
import createSagaMiddleware from 'redux-saga'
import saga from './saga/saga'

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
    reducer: {
        repository: repository
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(saga)
