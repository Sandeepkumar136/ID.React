import './style.css';
import './mediaQuiery.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import HomeCom from './components/home';
import Footer from './components/footer';
import Blogs from './components/blogs'
import Gear from './components/Gear';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navigation logo_title="Code with Sanju"/>
        <div className="content">
          <Routes>
            <Route path='/home' element={<HomeCom/>}/>
            <Route path='/' element={<HomeCom/>}/>
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/project' element={<Projects/>} />
            <Route path='/gears' element={<Gear/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/skills' element={<Skills/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
