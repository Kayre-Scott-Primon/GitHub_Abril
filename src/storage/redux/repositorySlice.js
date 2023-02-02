import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'repository',
    initialState: {
        title: '',
        url: '',
        owner: '',
        stars: ''
    },
    reducers: {
        setRespository(state, { payload }) {
            return {
                ...state,
                title: payload.title,
                url: payload.url,
                owner: payload.owner,
                stars: payload.stars
            }
        },
        resetRepository(state) {
            return {
                ...state,
                title: '',
                url: '',
                owner: '',
                stars: ''
            }
        }
    }
})

export const {
    setRespository,
    resetRepository
} = slice.actions

export const repository = state => state.repository

export default slice.reducer