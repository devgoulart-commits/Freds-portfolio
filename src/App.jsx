import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Produtos from './components/Produtos';
import PortfolioSections from './components/PortfolioSections';
import AssistantModal from './components/AssistantModal';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Produtos />
      <PortfolioSections />
      <AssistantModal />
    </>
  );
}
