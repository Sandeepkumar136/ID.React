import React, { useEffect, useState } from 'react';
import React from 'react'

export default function BlogPaginator() {
    const [blogs,Setblogs]=useState([]);
    const [currentPage, setCurrentPage]=useState(6);
    useEffect(()=>{
        const FetchBlogs= async()=>{
          try{
            const response=await fetch('BlogData.json');
            if(!response.ok){
             throw new Error(`HTTP error! status: ${response.status}`); 
            }
            const data=await response.json();
            Setblogs(data);
          }catch(error){
            console.error('Error fetching Blogs:', error);
          }
        };
        FetchBlogs();
      }, []);

      const LoadMore=()=>{
        setCurrentPage(pervCount=>pervCount+6);
        document.querySelector('.blog-container').scrollIntoView({behavior: 'smooth'});
    
      };
  return (
    <div>
      
    </div>
  )
}
