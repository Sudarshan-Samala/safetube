import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share, Flag, Clock } from 'lucide-react';

export default function WatchVideo() {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(true);

  // Mock video data
  const video = {
    id,
    title: 'Educational Content for Kids',
    channel: 'Learning Channel',
    views: '120K',
    timestamp: '3 days ago',
    description: 'This is an educational video designed for children, focusing on important learning concepts in a fun and engaging way.',
    ageRating: 'All Ages',
    duration: '10:30',
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player Section */}
        <div className="lg:col-span-2">
          <div className="bg-black aspect-video rounded-lg relative">
            <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
              {video.ageRating}
            </div>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {video.duration}
            </div>
            {/* Placeholder for video player */}
            <div className="w-full h-full flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white text-lg"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            </div>
          </div>

          {/* Video Info */}
          <div className="bg-white rounded-lg p-4 mt-4">
            <h1 className="text-xl font-bold">{video.title}</h1>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="text-sm text-gray-600">{video.views} views</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-gray-600">{video.timestamp}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded-full">
                  <ThumbsUp className="h-5 w-5" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded-full">
                  <ThumbsDown className="h-5 w-5" />
                  <span>Dislike</span>
                </button>
                <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded-full">
                  <Share className="h-5 w-5" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1 hover:bg-gray-100 px-3 py-2 rounded-full">
                  <Flag className="h-5 w-5" />
                  <span>Report</span>
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg p-4 mt-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="font-medium">{video.channel}</h3>
                <span className="text-sm text-gray-600">1.2M subscribers</span>
              </div>
            </div>
            <p className="text-gray-700 whitespace-pre-line">{video.description}</p>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="font-semibold mb-4">Recommended Videos</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex space-x-2">
                  <div className="w-40 aspect-video bg-gray-100 rounded-lg relative">
                    <span className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
                      10:30
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm line-clamp-2">Educational Video Title</h3>
                    <p className="text-xs text-gray-600 mt-1">Learning Channel</p>
                    <p className="text-xs text-gray-600">120K views • 3 days ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}