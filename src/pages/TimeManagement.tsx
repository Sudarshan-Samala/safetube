import React, { useState } from 'react';
import { Clock, AlertTriangle, Check } from 'lucide-react';

export default function TimeManagement() {
  const [dailyLimit, setDailyLimit] = useState(120);
  const [breakInterval, setBreakInterval] = useState(30);
  const [breakDuration, setBreakDuration] = useState(5);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-6">
          <Clock className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-2xl font-bold">Time Management Settings</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Daily Screen Time</h2>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="30"
                max="240"
                value={dailyLimit}
                onChange={(e) => setDailyLimit(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-lg font-medium w-20">{dailyLimit} min</span>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Break Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Break Interval</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="15"
                    max="60"
                    value={breakInterval}
                    onChange={(e) => setBreakInterval(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-lg font-medium w-20">{breakInterval} min</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Break Duration</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="5"
                    max="15"
                    value={breakDuration}
                    onChange={(e) => setBreakDuration(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-lg font-medium w-20">{breakDuration} min</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
              <h2 className="text-lg font-semibold">Reminders</h2>
            </div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="ml-2">Show break reminders</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="ml-2">Enable screen time warnings</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="ml-2">Send daily reports</span>
              </label>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center">
            <Check className="h-5 w-5 mr-2" />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}