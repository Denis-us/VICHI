import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import logo from './pictures/svg/logo-black.svg';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const WorksPage = lazy(() => import('./pages/WorksPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));

export default function App() {

  return (
    <Suspense fallback={
        <div className='loading'>
          <img src={logo} alt="logo" className='logo'/>
        </div>}>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    
    </Suspense>
  );
}
