import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = ({ switchLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-teal-600 text-white shadow-md">
      {/* Top Bar (mobile vs. desktop) */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* MOBILE LAYOUT */}
        <div className="flex items-center justify-between w-full md:hidden">
          {/* Hamburger Menu (Left) */}
          <button
            className="text-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Title in the center */}
          <div className="text-lg font-semibold">
            <Link to="/" className="hover:text-teal-200">
              2 Goats 1 Car
            </Link>
          </div>

          {/* Language Selector (Right) */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center hover:text-teal-200 transition-colors">
              <FaGlobe className="text-xl" aria-label="Change Language" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-32 bg-white text-teal-700 rounded-md shadow-md overflow-hidden">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => switchLanguage('en')}
                    className={`w-full text-left px-4 py-2 text-sm ${active ? 'bg-teal-100' : ''
                      }`}
                  >
                    English
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => switchLanguage('de')}
                    className={`w-full text-left px-4 py-2 text-sm ${active ? 'bg-teal-100' : ''
                      }`}
                  >
                    Deutsch
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Logo (far left) */}
          <div className="text-lg font-semibold">
            <Link to="/" className="hover:text-teal-200">
              2 Goats 1 Car
            </Link>
          </div>

          {/* Desktop Navigation (center) */}
          <nav className="flex-1 flex justify-center items-center space-x-8">
            <Link to="/privacy" className="hover:text-teal-200 transition-colors">
              {t('privacy')}
            </Link>
            <Link to="/imprint" className="hover:text-teal-200 transition-colors">
              {t('imprint')}
            </Link>
          </nav>

          {/* Language Selector (right) */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center hover:text-teal-200 transition-colors">
              <FaGlobe className="text-xl" aria-label="Change Language" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-32 bg-white text-teal-700 rounded-md shadow-md overflow-hidden">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => switchLanguage('en')}
                    className={`w-full text-left px-4 py-2 text-sm ${active ? 'bg-teal-100' : ''
                      }`}
                  >
                    English
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => switchLanguage('de')}
                    className={`w-full text-left px-4 py-2 text-sm ${active ? 'bg-teal-100' : ''
                      }`}
                  >
                    Deutsch
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>

      {/* MOBILE FLYOUT MENU & OVERLAY */}
      <div
        className={`md:hidden fixed inset-0 z-50 flex transition-all duration-300 
          ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Overlay (click to close) */}
        <div
          onClick={() => setIsOpen(false)}
          className={`
            absolute inset-0 bg-black bg-opacity-50 
            transition-opacity duration-300
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
        ></div>

        {/* Slide-out Nav */}
        <nav
          className={`
            relative bg-teal-700 w-64 h-full shadow-md
            transform transition-transform duration-300
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <div className="flex flex-col items-start p-4 space-y-4 mt-10">
            <Link
              to="/privacy"
              className="hover:text-teal-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('privacy')}
            </Link>
            <Link
              to="/imprint"
              className="hover:text-teal-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('imprint')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
