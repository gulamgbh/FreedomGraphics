import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aboutscreen, Cartscreen, Contactscreen, Errorscreen, Homescreen, Productsscreen, SingleProductscreen } from './screens';
import { Footercomponent, Headercomponent } from './components';
import { useDispatch } from 'react-redux';
import { getAllProduct } from './redux/action/product.action';


function App() {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct());
    }, [])
  return (
    <BrowserRouter>
      <Headercomponent />
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/contact" element={<Contactscreen />} />
        <Route path="/about" element={<Aboutscreen />} />
        <Route path="/cart" element={<Cartscreen />} />
        <Route path="/single-product/:id" element={<SingleProductscreen />} />
        <Route path="/products" element={<Productsscreen />} />
        <Route path="*" element={<Errorscreen />} />
      </Routes>
      <Footercomponent />
    </BrowserRouter>
  )
}


export default App

