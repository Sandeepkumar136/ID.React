// src/components/Gallery.js
import React, { useEffect} from 'react';

export default function Blogs({ onLoadingStart, onLoadingStop }) {
  const [blogs,Setblogs]=useState([]);
  const [currentPage, setCurrentPage]=useState(6);
  useEffect(() => {
    if (onLoadingStart && onLoadingStop) {
      onLoadingStart();
      // Simulate loading time
      setTimeout(() => {
        onLoadingStop();
      }, 1000);
    }
  }, [onLoadingStart, onLoadingStop]);
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
      <div className="blog-container">
        {blogs.slice(0, currentPage).map(element=>(
          <div key={element.id} className="Blogcard">
            <div className="bc-up-contain">
              <img src={element.img} className="logo-b"/>
                              <div className="title-b">
                {element.username}
              </div>
              <div className="b-dep-date">
                {element.date}
              </div>
            </div>
            <div className="b-base-contain">
            <div className="b-base-title">
              {element.title}
              </div>
              <div className="b-b-disc">
                {element.description}
              </div>
              <div className="b-b-base-link">
              <a href={element.link} className="b-b-link">view in blogspot</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {currentPage<blogs.length&&(<button onClick={LoadMore}>LoadMore</button>
    )};
    </div>
  );
}
