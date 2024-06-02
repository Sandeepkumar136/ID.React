import './App.css';
import { author } from './Script.mjs';


function App() {
  return (
    <div className='App'>
      <nav className="navbar">
        <div className="logo-containe">
          <img src="https://i.ibb.co/D7TGdLS/FB-IMG-1652607151685.jpg" alt="logo" className="nav-logo" />
          <p className="nav-tittle">{author}</p>
        </div>
        <ul className="nav-items">
          <li className="nav-lists"><a href="/" className="nav-links">Projects</a></li>
          <li className="nav-lists"><a href="/" className="nav-links">Blogs</a></li>
          <li className="nav-lists"><a href="/" className="nav-links">Skills</a></li>
          <li className="nav-lists"><a href="/" className="nav-links">Gears</a></li>
          <li className="nav-lists"><a href="/" className="nav-links">Gallery</a></li>
        </ul>
        <ul className="social-items">
          <li className="social-lists"><a href="/" className="social-links bx bxl-facebook-circle"></a></li>
          <li className="social-lists"><a href="/" className="social-links bx bxl-instagram-alt"></a></li>
          <li className="social-lists"><a href="/" className="social-links bx bxl-telegram"></a></li>
          <li className="social-lists"><a href="/" className="social-links bx bxl-github"></a></li>
          <li className="social-lists"><a href="/" className="social-links bx bxs-moon"></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
