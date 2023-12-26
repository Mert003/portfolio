
import './App.css';
import Aboutme from './components/Aboutme/aboutme';
import Contact from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavbarComponent from './components/Navbar/navbar';
import ProjectsComponent from './components/Projects/projects';
import Prompt from './components/prompt/prompt';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <Aboutme />
      <ProjectsComponent />
      <Prompt />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
