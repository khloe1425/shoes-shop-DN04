import productReducer  from './reducers/productReducer';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        productReducer:productReducer,
    },
})

// Lấy type của State
export type RootState = ReturnType<typeof store.getState>
// Lấy type của Dispatch
export type AppDispatch = typeof store.dispatch