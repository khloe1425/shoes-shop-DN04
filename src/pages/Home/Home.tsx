import React, { useEffect, useState } from 'react'

import {useSelector,useDispatch} from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import { getProductAPI, ProductModel } from '../../redux/reducers/productReducer';

type Props = {}

// props: đối tượng props
export default function Home(props: Props) {

    const {arrProduct} = useSelector((state:RootState) => state.productReducer);
    const dispatch:AppDispatch = useDispatch();

    useEffect(() => { 
       let action = getProductAPI();
       dispatch(action);
     },[]);

  const renderProduct = () => {
    return arrProduct.map((prod:ProductModel, index:number) => { 
          return <div className="col-4" key={prod.id}>
                <div className="card">
                      <img src={prod.image} alt="" />
                      <p>{prod.price}</p>
                </div>
          </div>
     })
  }

  return (
    <div className='container'>
      <h1 className='text-center'>Shoes Shop</h1>
      <div className="row">
        {renderProduct()}
      </div>
    </div>
  )
}