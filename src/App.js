import './App.css';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import About from './pages/About'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import Order from './pages/Order'


// const HomePage = lazy(() => import('./pages/HomePage'))
// const About = lazy(() => import('./pages/About'))
// const Services = lazy(() => import('./pages/Services'))
// const Contacts = lazy(() => import('./pages/Contacts'))
// const Order = lazy(() => import('./pages/Order'))


export default function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/order" element={<Order/>}/>

    </Routes>
  );
}
