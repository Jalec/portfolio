import './App.css';
import { Landing } from './pages/Landing.jsx'
import { Aboutme } from './pages/Aboutme.jsx';
import { Pages } from './pages/Pages.jsx';
import { Skills } from './pages/Skills.jsx';
import { Contact } from './pages/ContactMe.jsx';
import { Footer } from './components/footer';
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div>
      <Landing />
      <Aboutme />
      <Pages />
      <Skills />
      <Contact />
      <Footer />
      <button className={`jump-btn ${showScrollButton ? 'active' : ''}`} onClick={scrollToTop}>
        <FaArrowUp size={20} color='white' className='arrow-icon'/>
      </button>
    </div>
  );
}

export default App;
