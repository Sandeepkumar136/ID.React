import React, { useEffect } from 'react';
import HomeTyper from './HomeTyper';

export default function HomeCom({ onLoadingStart, onLoadingStop }) {
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
      <HomeTyper/>
    </div>
  )
}
