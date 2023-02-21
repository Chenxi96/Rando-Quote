import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'qoute',
    initialState: {
        quote: 0
    },
    reducers: {
        newquote: ((state) => {
            state.quote
        })
    }
})