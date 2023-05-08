import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {fetchData} from "../../api";

export const fetchCats = createAsyncThunk('https://catfact.ninja/fact', async (name) => {
    const response = await fetchData('https://catfact.ninja/fact');
    console.log(response);
    return response;
});

const catsSlice = createSlice({
    name: 'catsSlice',
    initialState: {
        value: 0,
        catsData: null
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCats.fulfilled, (state, action) => {
            state.catsData = action.payload;
        })
        // builder.addCase(fetchCats.pending, (state, action) => {
        //     state.isLoading = true;
        // })
        // builder.addCase(fetchCats.rejected, (state, action) => {
        //     state.error = 'error';
        // })
    }
});

export const {increment} = catsSlice.actions;
export default catsSlice.reducer