"use client";

import { BackgroundPixelStars } from "./background-pixel-stars";

const Default = () => {
  return (
    // FIX: Using inline styles for the complex base64 pattern ensures it loads correctly over a solid black Tailwind background
    <div 
      className="relative h-screen w-screen bg-black overflow-hidden select-none"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mIUEhJiwAbevXuHVZyJgUQwqmEUDB0AEGAADd8DEPTX6ksAAAAASUVORK5CYII=")`,
        backgroundSize: "16px"
      }}
    >
      {/* Animated Pixel Stars Layer */}
      <BackgroundPixelStars />

      
    </div>
  );
};

export default Default;
