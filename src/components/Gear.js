// src/components/Gallery.js
import React, { useEffect } from 'react';

export default function Gear({ onLoadingStart, onLoadingStop }) {
  useEffect(() => {
    if (onLoadingStart && onLoadingStop) {
      onLoadingStart();
      // Simulate loading time
      setTimeout(() => {
        onLoadingStop();
      }, 1000);
    }
  }, [onLoadingStart, onLoadingStop]);

  return (
    <div>
      <p>This is Gallery</p>
    </div>
  );
}
