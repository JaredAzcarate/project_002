import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
import Contact from './components/form';
import BasicExample from './components/header';
import Newletters from './components/newsleeters';
import Projects from './components/projects';
import Skills from './components/skills';


function App() {

  return (
    <div className="App">
      <BasicExample/>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Newletters />
      <Footer/>
    </div>
  );
}

export default App;
