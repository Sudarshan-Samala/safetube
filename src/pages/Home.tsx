import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield } from 'lucide-react';

const videos = [
  {
    id: '1',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
    title: 'Educational Content for Kids',
    channel: 'Learning Channel',
    views: '120K',
    timestamp: '3 days ago',
    duration: '10:30',
    ageRating: 'All Ages'
  },
  // Add more video entries as needed
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="font-medium">Safe Mode Active</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="font-medium">Screen Time: 45m remaining</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Link key={video.id} to={`/watch/${video.id}`} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </span>
                <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                  {video.ageRating}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span>{video.views} views</span>
                  <span className="mx-1">•</span>
                  <span>{video.timestamp}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}