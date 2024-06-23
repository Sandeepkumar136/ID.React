// src/components/Gallery.js
import React, { useEffect} from 'react';
import BlogPaginator from './BlogPaginator';

export default function Blogs({ onLoadingStart, onLoadingStop }) {
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
    <BlogPaginator/>
  );
}
