import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Layers, Info, Phone, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [manuallyCollapsed, setManuallyCollapsed] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Accueil' },
    { path: '/services', icon: Briefcase, label: 'Services' },
    { path: '/solutions', icon: Layers, label: 'Solutions' },
    { path: '/about', icon: Info, label: 'À Propos' },
    { path: '/contact', icon: Phone, label: 'Contact' },
  ];

  const handleMouseEnter = () => {
    if (!manuallyCollapsed) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    setManuallyCollapsed(false);
  };

  const handleMenuClick = () => {
    setIsExpanded(false);
    setManuallyCollapsed(true);
  };

  return (
    <>
      {/* Vertical Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-screen bg-white/5 backdrop-blur-md shadow-2xl z-50 transition-all duration-300 ${
          isExpanded ? 'w-64' : 'w-20'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col h-full py-6">
          {/* Logo */}
          <Link to="/" onClick={handleMenuClick} className="flex items-center px-4 mb-8">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-primary-600 font-bold text-xl">TS</span>
            </div>
            <span
              className={`ml-3 text-gray-800 font-bold text-lg whitespace-nowrap transition-all duration-300 ${
                isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
              }`}
            >
              TechServices
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="flex-1 flex flex-col space-y-2 px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleMenuClick}
                  className={`flex items-center px-3 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-800 hover:bg-primary-100'
                  }`}
                >
                  <Icon size={24} className="flex-shrink-0" />
                  <span
                    className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                      isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* User Section */}
          <div className="px-3 mt-auto pt-4 border-t border-gray-300">
            {isAuthenticated ? (
              <>
                <Link
                  to="/client"
                  onClick={handleMenuClick}
                  className="flex items-center px-3 py-3 rounded-lg text-gray-800 hover:bg-primary-100 transition-all duration-200 mb-2"
                >
                  <User size={24} className="flex-shrink-0" />
                  <span
                    className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                      isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
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
                  className="flex items-center px-3 py-3 rounded-lg text-gray-800 hover:bg-red-100 transition-all duration-200 w-full"
                >
                  <LogOut size={24} className="flex-shrink-0" />
                  <span
                    className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                      isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
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
                className="flex items-center px-3 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-all duration-200 shadow-lg"
              >
                <User size={24} className="flex-shrink-0" />
                <span
                  className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                    isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
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
