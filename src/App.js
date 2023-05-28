import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorksPage from './pages/WorksPage'
import ContactsPage from './pages/ContactsPage'
import OrderPage from './pages/OrderPage'

// const HomePage = lazy(() => import('./pages/HomePage'))
// const About = lazy(() => import('./pages/About'))
// const Services = lazy(() => import('./pages/Services'))
// const Contacts = lazy(() => import('./pages/Contacts'))
// const Order = lazy(() => import('./pages/Order'))


export default function App() {

  return (
    <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/works" element={<WorksPage/>}/>
      <Route path="/contacts" element={<ContactsPage/>}/>
      <Route path="/order" element={<OrderPage/>}/>

    </Routes>
  );
}
