import { AppDispatch } from './../configStore';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API } from '../../util/setting';
import type { PayloadAction } from '@reduxjs/toolkit'

//Tạo interface ProductModel

export interface ProductModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
}

//state mặc định
const initialState:any = {
    arrProduct: []
}

//khai báo reducer
export const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getProductListAction: (state, action: PayloadAction<ProductModel[]>) => {
            state.arrProduct = action.payload;
        }
    }
});

export const {getProductListAction } = productReducer.actions

export default productReducer.reducer


//Action API

export const getProductAPI = () => {
    // AppDispatch: kiểu dữ liệu của hàm dispatch (dispatch2 của thunk)
    return (dispatch: AppDispatch) => {
        axios({
            method: 'get',
            url: `${URL_API}/Product`,
        }).then((result) => {

            let arrProduct: ProductModel[] = result.data.content;

            const action = getProductListAction(arrProduct);

            dispatch(action);


        }).catch((error) => {
            console.log(error)
        })
    }
}