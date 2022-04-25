import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import AllNews from './Pages/AllNews/AllNews';
import ErrorPage from './Pages/Errorpage/ErrorPage';

function App() {
  return (
    <Router>
      <div className='app'>
      <div className='page-wrapper'></div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/allNews'>All News</Link>
      </nav>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/allNews/:newspost" element={<AllNews />}/>
          <Route path="*" element={<ErrorPage />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
