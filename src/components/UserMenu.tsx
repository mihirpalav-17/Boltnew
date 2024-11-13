import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, UserPlus, Calendar, Heart, Settings, HelpCircle } from 'lucide-react';

interface UserMenuProps {
  onClose: () => void;
}

export default function UserMenu({ onClose }: UserMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div 
      ref={menuRef}
      className="absolute right-0 top-12 w-64 bg-white rounded-xl shadow-lg border py-2"
    >
      <div className="px-4 py-2 border-b">
        <Link 
          to="/signup" 
          className="block py-2 px-3 rounded-lg text-center bg-rose-600 text-white hover:bg-rose-700"
        >
          <span className="flex items-center justify-center gap-2">
            <UserPlus className="h-4 w-4" />
            Sign up
          </span>
        </Link>
        <Link 
          to="/login" 
          className="block py-2 px-3 mt-2 rounded-lg text-center hover:bg-gray-100"
        >
          <span className="flex items-center justify-center gap-2">
            <LogIn className="h-4 w-4" />
            Log in
          </span>
        </Link>
      </div>
      
      <div className="py-2">
        <Link to="/bookings" className="flex items-center px-4 py-2 hover:bg-gray-100">
          <Calendar className="h-4 w-4 mr-3" />
          My bookings
        </Link>
        <Link to="/favorites" className="flex items-center px-4 py-2 hover:bg-gray-100">
          <Heart className="h-4 w-4 mr-3" />
          Saved experiences
        </Link>
        <Link to="/settings" className="flex items-center px-4 py-2 hover:bg-gray-100">
          <Settings className="h-4 w-4 mr-3" />
          Settings
        </Link>
        <Link to="/help" className="flex items-center px-4 py-2 hover:bg-gray-100">
          <HelpCircle className="h-4 w-4 mr-3" />
          Help
        </Link>
      </div>
    </div>
  );
}