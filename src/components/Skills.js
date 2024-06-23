import React, { useEffect } from 'react';
import SkillsCrusal from './SkillsCrusal';

export default function Skills({ onLoadingStart, onLoadingStop }) {
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
      <SkillsCrusal/>
    </div>
  )
}

