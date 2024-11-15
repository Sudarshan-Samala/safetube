import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Mic, Bell, User, Settings, LogOut } from 'lucide-react';
import useStore from '../store';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const { toggleVoiceMode, user, logout } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center ml-4">
              <span className="text-xl font-bold text-red-600">SafeTube</span>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search with safety filters enabled"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
                  <Search className="h-5 w-5" />
                </button>
                <button 
                  onClick={toggleVoiceMode}
                  className="ml-4 p-2 hover:bg-gray-100 rounded-full"
                >
                  <Mic className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/time-management" className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="h-6 w-6" />
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-6 w-6" />
            </button>
            <Link to="/parental-controls" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6" />
            </Link>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-gray-100 rounded-full text-red-600"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}