import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page/Home";
import Login from "./login/login";
import CategoryPage from "./page/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./page/ErrorPage";
import SingleHotelView from "./page/SingleHotelView";
import GlobleCotext from "./contextApi/GlobleContex";
import ProtectedRoute from "./pr/pr";
import Cookie from 'js-cookie';
import React from 'react';

function App() {
  const token = Cookie.get('login');

  return (
    <>
    <GlobleCotext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Category" element={<CategoryPage/>}/>
          {/* <Route path={/SingleHotelView/:id} element={<SingleHotelView/>} /> */}
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/login" element={<Login/>}/> 
        </Routes>
      </BrowserRouter>
      <Footer />
      </GlobleCotext>
    </>

  );
}

export default App;