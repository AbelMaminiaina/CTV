import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Layers, Info, Phone, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [manuallyCollapsed, setManuallyCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Accueil' },
    { path: '/services', icon: Briefcase, label: 'Services' },
    { path: '/solutions', icon: Layers, label: 'Solutions' },
    { path: '/about', icon: Info, label: 'À Propos' },
    { path: '/contact', icon: Phone, label: 'Contact' },
  ];

  // Détection de la taille de l'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleMouseEnter = () => {
    if (!manuallyCollapsed && !isMobile) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsExpanded(false);
      setManuallyCollapsed(false);
    }
  };

  const handleMenuClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    } else {
      setIsExpanded(false);
      setManuallyCollapsed(true);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Bouton hamburger pour mobile */}
      {!isMobileMenuOpen && (
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 left-4 z-[100] md:hidden w-12 h-12 bg-white/90 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Bouton close pour mobile */}
      {isMobileMenuOpen && (
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 right-4 z-[100] md:hidden w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      )}


      {/* Vertical Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-screen shadow-2xl transition-all duration-300 ${
          isMobile
            ? isMobileMenuOpen
              ? 'w-full translate-x-0 z-[65] opacity-100 bg-white'
              : 'w-full -translate-x-full opacity-0 pointer-events-none bg-white'
            : isExpanded
            ? 'w-64 z-50 opacity-100 bg-white/5 backdrop-blur-md'
            : 'w-20 z-50 opacity-100 bg-white/5 backdrop-blur-md'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col h-full py-4 md:py-6">
          {/* Logo */}
          <Link to="/" onClick={handleMenuClick} className="flex items-center px-2 md:px-4 mb-6 md:mb-8">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-primary-600 font-bold text-lg md:text-xl">TS</span>
            </div>
            <span
              className={`ml-3 text-gray-800 font-bold text-lg whitespace-nowrap transition-all duration-300 ${
                (isMobile && isMobileMenuOpen) || (!isMobile && isExpanded)
                  ? 'opacity-100 w-auto'
                  : 'opacity-0 w-0 overflow-hidden'
              }`}
            >
              TechServices
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="flex-1 flex flex-col space-y-1 md:space-y-2 px-2 md:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleMenuClick}
                  className={`flex items-center px-2 md:px-3 py-2 md:py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-800 hover:bg-primary-100'
                  }`}
                >
                  <Icon size={20} className="flex-shrink-0 md:w-6 md:h-6" />
                  <span
                    className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                      (isMobile && isMobileMenuOpen) || (!isMobile && isExpanded)
                        ? 'opacity-100 w-auto'
                        : 'opacity-0 w-0 overflow-hidden'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* User Section */}
          <div className="px-2 md:px-3 mt-auto pt-3 md:pt-4 border-t border-gray-300">
            {isAuthenticated ? (
              <>
                <Link
                  to="/client"
                  onClick={handleMenuClick}
                  className="flex items-center px-2 md:px-3 py-2 md:py-3 rounded-lg text-gray-800 hover:bg-primary-100 transition-all duration-200 mb-2"
                >
                  <User size={20} className="flex-shrink-0 md:w-6 md:h-6" />
                  <span
                    className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                      (isMobile && isMobileMenuOpen) || (!isMobile && isExpanded)
                        ? 'opacity-100 w-auto'
                        : 'opacity-0 w-0 overflow-hidden'
                    }`}
                  >
                    Espace Client
                  </span>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    handleMenuClick();
                  }}
                  className="flex items-center px-2 md:px-3 py-2 md:py-3 rounded-lg text-gray-800 hover:bg-red-100 transition-all duration-200 w-full"
                >
                  <LogOut size={20} className="flex-shrink-0 md:w-6 md:h-6" />
                  <span
                    className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                      (isMobile && isMobileMenuOpen) || (!isMobile && isExpanded)
                        ? 'opacity-100 w-auto'
                        : 'opacity-0 w-0 overflow-hidden'
                    }`}
                  >
                    Déconnexion
                  </span>
                </button>
              </>
            ) : (
              <Link
                to="/client"
                onClick={handleMenuClick}
                className="flex items-center px-2 md:px-3 py-2 md:py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-all duration-200 shadow-lg"
              >
                <User size={20} className="flex-shrink-0 md:w-6 md:h-6" />
                <span
                  className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                    (isMobile && isMobileMenuOpen) || (!isMobile && isExpanded)
                      ? 'opacity-100 w-auto'
                      : 'opacity-0 w-0 overflow-hidden'
                  }`}
                >
                  Connexion
                </span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
