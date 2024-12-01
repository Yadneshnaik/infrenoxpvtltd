import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import BillingAutomationPlans from './pages/BillingAutomationPlans';
import CustomInvoicingPlans from './pages/CustomInvoicingPlans';
import SubscriptionManagementPlans from './pages/SubscriptionManagementPlans';
import OfferBanner from "./components/OfferBanner";
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <OfferBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/plans/billing-automation" element={<BillingAutomationPlans />} />
        <Route path="/plans/custom-invoicing" element={<CustomInvoicingPlans />} />
        <Route path="/plans/subscription-management" element={<SubscriptionManagementPlans />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
