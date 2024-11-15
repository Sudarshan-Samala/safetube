import React, { useState } from 'react';
import { Shield, Eye, Filter, Bell } from 'lucide-react';

export default function ParentalControls() {
  const [contentFilter, setContentFilter] = useState('strict');
  const [maxAge, setMaxAge] = useState(13);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-6">
          <Shield className="h-8 w-8 text-green-600 mr-3" />
          <h1 className="text-2xl font-bold">Parental Controls</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-green-600 mr-2" />
              <h2 className="text-lg font-semibold">Content Filtering</h2>
            </div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="filter"
                  value="strict"
                  checked={contentFilter === 'strict'}
                  onChange={(e) => setContentFilter(e.target.value)}
                  className="text-green-600"
                />
                <span className="ml-2">Strict (Only educational content)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="filter"
                  value="moderate"
                  checked={contentFilter === 'moderate'}
                  onChange={(e) => setContentFilter(e.target.value)}
                  className="text-green-600"
                />
                <span className="ml-2">Moderate (Family-friendly content)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="filter"
                  value="light"
                  checked={contentFilter === 'light'}
                  onChange={(e) => setContentFilter(e.target.value)}
                  className="text-green-600"
                />
                <span className="ml-2">Light (Block inappropriate content)</span>
              </label>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Eye className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold">Age Settings</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Maximum Content Age Rating</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="3"
                    max="18"
                    value={maxAge}
                    onChange={(e) => setMaxAge(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-lg font-medium w-20">{maxAge} years</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-purple-600 mr-2" />
              <h2 className="text-lg font-semibold">Monitoring & Alerts</h2>
            </div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-purple-600" defaultChecked />
                <span className="ml-2">Send alerts for restricted content attempts</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-purple-600" defaultChecked />
                <span className="ml-2">Weekly activity reports</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-purple-600" defaultChecked />
                <span className="ml-2">Real-time monitoring</span>
              </label>
            </div>
          </div>

          <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center">
            <Shield className="h-5 w-5 mr-2" />
            Update Safety Settings
          </button>
        </div>
      </div>
    </div>
  );
}