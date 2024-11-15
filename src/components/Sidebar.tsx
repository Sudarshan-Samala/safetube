import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Clock, 
  Shield, 
  History, 
  Bookmark,
  ThumbsUp,
  Settings,
  HelpCircle
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-[calc(100vh-64px)] sticky top-16 overflow-y-auto hidden md:block">
      <div className="p-3">
        <div className="space-y-2">
          <Link to="/" className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
            <Home className="h-5 w-5 mr-3" />
            <span>Home</span>
          </Link>
          
          <Link to="/time-management" className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
            <Clock className="h-5 w-5 mr-3" />
            <span>Time Management</span>
          </Link>

          <Link to="/parental-controls" className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
            <Shield className="h-5 w-5 mr-3" />
            <span>Parental Controls</span>
          </Link>

          <hr className="my-3" />

          <div className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
            <History className="h-5 w-5 mr-3" />
            <span>Watch History</span>
          </div>

          <div className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
            <Bookmark className="h-5 w-5 mr-3" />
            <span>Saved Videos</span>
          </div>

          <div className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
            <ThumbsUp className="h-5 w-5 mr-3" />
            <span>Liked Videos</span>
          </div>

          <hr className="my-3" />

          <div className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
            <Settings className="h-5 w-5 mr-3" />
            <span>Settings</span>
          </div>

          <div className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
            <HelpCircle className="h-5 w-5 mr-3" />
            <span>Help</span>
          </div>
        </div>
      </div>
    </aside>
  );
}