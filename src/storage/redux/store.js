import { configureStore } from "@reduxjs/toolkit";
import repository from "./repositorySlice";

export default configureStore({
    reducer: {
        repository: repository
    }
})