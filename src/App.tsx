import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GuestBanner from './components/GuestBanner';
import Home from './pages/Home';
import WatchVideo from './pages/WatchVideo';
import TimeManagement from './pages/TimeManagement';
import ParentalControls from './pages/ParentalControls';
import Login from './pages/Login';
import Signup from './pages/Signup';
import useStore from './store';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useStore();
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  const { user } = useStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {user?.isGuest && <GuestBanner />}
        {user && <Navbar />}
        <div className="flex">
          {user && <Sidebar />}
          <main className={user ? 'flex-1 p-6' : 'w-full'}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/watch/:id"
                element={
                  <PrivateRoute>
                    <WatchVideo />
                  </PrivateRoute>
                }
              />
              <Route
                path="/time-management"
                element={
                  <PrivateRoute>
                    <TimeManagement />
                  </PrivateRoute>
                }
              />
              <Route
                path="/parental-controls"
                element={
                  <PrivateRoute>
                    <ParentalControls />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;