import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Admin from './admin/Admin';
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import {Provider} from 'react-redux'
import store from './store/index'
import CartPage from './CartPage';
import DetailPage from './SubpageJS/DetailPage';
import Homepage from './SubpageJS/Homepage';
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<App />} exact/>
        <Route path='/admin' element ={<Admin/>}/>
        <Route path='/' element={<Homepage/>} />
        <Route path='/detail' element={<DetailPage/>} />
        <Route path='/cart' element ={<CartPage/>}/>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
