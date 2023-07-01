import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './pictures/svg/logo-black.svg';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const PrinciplesPage = lazy(() => import('./pages/PrinciplesPage'));
const CompanyPage = lazy(() => import('./pages/CompanyPage'));
const ClientsPage = lazy(() => import('./pages/ClientsPage'));
const WorksPage = lazy(() => import('./pages/WorksPage'));
const AllWorksPage = lazy(() => import('./pages/AllWorksPage'));
const PlayerPage = lazy(() => import('./pages/PlayerPage'));
const OneWorkPage = lazy(() => import('./pages/OneWorkPage'));
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
        <Route path="/about/team" element={<TeamPage/>} />
        <Route path="/about/principles" element={<PrinciplesPage/>} />
        <Route path="/about/company" element={<CompanyPage/>} />
        <Route path="/about/clients" element={<ClientsPage/>} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/all" element={<AllWorksPage />} />
        <Route path="/works/all/player" element={<PlayerPage />} />
        <Route path="/works/all/player/work-info" element={<OneWorkPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    
    </Suspense>
  );
}
