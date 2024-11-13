import React, { useState } from 'react';
import { Search, Menu, User2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';

export default function Header() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-rose-600 font-bold text-2xl">DineHost</span>
          </Link>
          
          <div className="hidden md:flex items-center px-4 py-2 rounded-full border shadow-sm hover:shadow-md transition-all">
            <input 
              type="text" 
              placeholder="Find local dining experiences..." 
              className="outline-none bg-transparent w-[300px]"
            />
            <Search className="h-5 w-5 text-gray-500" />
          </div>

          <div className="flex items-center gap-4">
            <Link to="/host" className="hidden md:block hover:bg-gray-100 px-4 py-2 rounded-full">
              Become a host
            </Link>
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 border p-2 rounded-full hover:shadow-md transition-all cursor-pointer"
              >
                <Menu className="h-5 w-5" />
                <User2 className="h-5 w-5" />
              </button>
              {showUserMenu && <UserMenu onClose={() => setShowUserMenu(false)} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}