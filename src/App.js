import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import AllNews from './Pages/AllNews/AllNews';
import ErrorPage from './Pages/Errorpage/ErrorPage';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'


function App() {
  return (
    <>
    <Router>
      <div className='page-wrapper'></div>
      <div className='app container'>
      <Header />
      <Nav />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/allnews/:newspost" element={<AllNews />}/>
          <Route path="*" element={<ErrorPage />}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
