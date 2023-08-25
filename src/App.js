import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInAndSignUpPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
