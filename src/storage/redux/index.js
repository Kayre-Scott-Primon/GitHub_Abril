import { configureStore } from "@reduxjs/toolkit";
import repository from "./reducer/Repository";

export default configureStore({
    reducer: {
        repository: repository
    }
})
