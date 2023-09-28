import './App.css';
import { Routes, Route, } from 'react-router-dom'; 
import { useEffect } from 'react';
import { createAction } from './utils/reducer/reducer.utils';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.util';
import { createAction } from './utils/reducer/reducer.utils';










const App = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user)
        }
        setCurrrentUser(user)
    });

    return unsubscribe
}, []);
  return  (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
       
      
    </Routes>
    
  )
}



export default App;
