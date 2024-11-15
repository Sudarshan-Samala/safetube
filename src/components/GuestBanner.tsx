import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, AlertTriangle } from 'lucide-react';
import useStore from '../store';

export default function GuestBanner() {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const navigate = useNavigate();
  const { user, logout } = useStore();

  useEffect(() => {
    if (!user?.isGuest) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          logout();
          navigate('/login');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [user, logout, navigate]);

  if (!user?.isGuest) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm text-blue-600">
              You're in guest mode
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-blue-600">
              <Clock className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">
                {minutes}:{seconds.toString().padStart(2, '0')} remaining
              </span>
            </div>
            <Link
              to="/signup"
              className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}