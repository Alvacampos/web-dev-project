import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Skills from './views/skills';
import Education from './views/education';
import Contact from './views/contact';
import Project from './views/contact';
import Navbar from './components/Navbar/Navbar';

import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
