import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer component
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';
import HostKnowledgeTestPage from './pages/HostKnowledgeTestPage';

const App = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar switchLanguage={switchLanguage} />

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host-test" element={<HostKnowledgeTestPage />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
