import React, { useState, useEffect } from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { auth } from './firebase/firebase';

import BooksPage from './components/books/BooksPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import NavBar from './components/common/NavBar';

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [])
  return (
    <div>
      <BrowserRouter>
        <NavBar user={user}/>
        <Routes>
          <Route path='/' element={<BooksPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )

}
