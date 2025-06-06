import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface HeaderProps {
  onOpenCart: () => void;
  onOpenAuth: () => void;
}

export function Header({ onOpenCart, onOpenAuth }: HeaderProps) {
  const { state } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">PoultryFresh</span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* User Button */}
            <button
              onClick={onOpenAuth}
              className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <User className="w-6 h-6" />
              {state.isAuthenticated && (
                <span className="hidden sm:block text-sm">{state.user?.name}</span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Products
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                About
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}