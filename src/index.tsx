import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// path='*': link không tồn tại thì điều hướng người dung sang trang khác
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='detail' element={<Details/>}>
                <Route path=':id' element={<Details/>}></Route>
          </Route>

          <Route path='*' element={<Navigate to="" />}></Route>

        </Route>

      </Routes>
    </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
