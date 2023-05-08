import {createSlice} from '@reduxjs/toolkit'

const catsSlice = createSlice({
    name: 'catsSlice',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    }
});
export const {increment} = catsSlice.actions;
export default catsSlice.reducer