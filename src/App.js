import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import AllNews from './Pages/AllNews';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
