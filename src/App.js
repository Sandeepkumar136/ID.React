import React, { useRef } from 'react';
import './style.css';
import './mediaQuiery.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopLoadingBar from 'react-top-loading-bar';
import Navigation from './components/Navbar';
import HomeCom from './components/home';
import Footer from './components/footer';
import Blogs from './components/blogs';
import Gear from './components/Gear';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const loadingBarRef = useRef(null);

  const handleLoadingStart = () => {
    loadingBarRef.current.continuousStart();
  };

  const handleLoadingStop = () => {
    loadingBarRef.current.complete();
  };

  return (
    <div className="app-container">
      <Router>
        <Navigation logo_title="Code with Sanju" />
        <TopLoadingBar ref={loadingBarRef} className='LoadingBar' shadow={true} />
        <div className="content">
          <Routes>
            <Route path='/home' element={<HomeCom onLoadingStart={handleLoadingStart} onLoadingStop={handleLoadingStop} />} />
            <Route path='/' element={<HomeCom onLoadingStart={handleLoadingStart} onLoadingStop={handleLoadingStop} />} />
            <Route path='/blogs' element={<Blogs onLoadingStart={handleLoadingStart} onLoadingStop={handleLoadingStop} />} />
            <Route path='/project' element={<Projects onLoadingStart={handleLoadingStart} onLoadingStop={handleLoadingStop} />} />
            <Route path='/gears' element={<Gear onLoadingStart={handleLoadingStart} onLoadingStop={handleLoadingStop} />} />
            <Route path='/gallery' element={<Gallery onLoadingStart={handleLoadingStart} onLoadingStop={handleLoadingStop} />} />
            <Route path='/skills' element={<Skills onLoadingStart={handleLoadingStart} onLoadingStop={handleLoadingStop} />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
