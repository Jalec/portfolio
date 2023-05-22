import './App.css';
import { Landing } from './pages/Landing.jsx'
import { Aboutme } from './pages/Aboutme.jsx';
import { Pages } from './pages/Pages.jsx';
import { Skills } from './pages/Skills.jsx';
import { Contact } from './pages/ContactMe.jsx';
import { Footer } from './components/footer';


function App() {
  return (
    <div>
      <Landing />
      <Aboutme />
      <Pages />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
