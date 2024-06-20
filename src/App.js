import './style.css';
import './mediaQuiery.css'
import Navigation from './components/Navbar';
import HomeCom from './components/home';
import Footer from './components/footer';
function App() {
  return (
    <>
    <Navigation logo_title="Code with Sanju"/>
    <HomeCom/>
    <Footer/>
    </>
  );
}

export default App;
