import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Bar - Contact Button */}
      <div className="bg-primary-700 text-white py-2">
        <div className="container-custom">
          <div className="flex justify-end items-center">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white text-primary-700 px-6 py-2 rounded-full font-semibold hover:bg-primary-50 transition-all shadow-md hover:shadow-lg"
            >
              <Calendar size={20} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TechServices</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Accueil
            </Link>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-full left-0 pt-2 transition-all duration-200">
                <div className="w-56 bg-white rounded-lg shadow-xl py-2">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    Tous les services
                  </Link>
                  <Link
                    to="/services?category=certification"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    Certifications
                  </Link>
                  <Link
                    to="/services?category=inspection"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    Inspections
                  </Link>
                  <Link
                    to="/services?category=testing"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    Tests & Analyses
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/solutions" className="text-gray-700 hover:text-primary-600 transition-colors">
              Solutions
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              À propos
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/client"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <User size={20} />
                  <span>Espace Client</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-sm text-gray-600 hover:text-red-600 transition-colors"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <Link
                to="/client"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Connexion
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="block text-gray-700 hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/solutions"
              className="block text-gray-700 hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              Solutions
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/client"
                  className="block text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Espace Client
                </Link>
                <button
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="block text-red-600 hover:text-red-700 transition-colors"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link
                to="/client"
                className="block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                onClick={toggleMenu}
              >
                Connexion
              </Link>
            )}
          </div>
        )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
