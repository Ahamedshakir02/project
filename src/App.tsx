import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import WhyUs from './components/WhyUs';
import ServicesOverview from './components/ServicesOverview';
import FleetShowcase from './components/FleetShowcase';
import PartnersClients from './components/PartnersClients';
import OfficeMap from './components/OfficeMap';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSlider />
      <WhyUs />
      <ServicesOverview />
      <FleetShowcase />
      <PartnersClients />
      <OfficeMap />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;