import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import ResumePage from './pages/ResumePage/ResumePage.jsx';
import MyWork from './pages/MyWork/MyWork.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Layout from './components/Layout/Layout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path ="*" element ={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;