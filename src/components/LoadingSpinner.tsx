import { memo } from 'react';

const LoadingSpinner = memo(() => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
        
        {/* Inner ring */}
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-gray-800 border-t-purple-500 rounded-full animate-spin animate-reverse"></div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
      
      <div className="ml-4 text-white">
        <div className="text-lg font-semibold">Loading...</div>
        <div className="text-sm text-gray-400">Optimizing performance</div>
      </div>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
