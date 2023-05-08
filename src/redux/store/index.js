import {configureStore} from '@reduxjs/toolkit'
import catReducer from '../slices/indes';

export default configureStore({
    reducer: {
        catReducer
    }
})