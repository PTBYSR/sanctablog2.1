import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import AllNews from './Pages/AllNews/AllNews';
import ErrorPage from './Pages/Errorpage/ErrorPage';
import Header from './components/Header/Header';
import { 
  Nav,
  NavItems,
  NavItem
 } from './App.element.js'
function App() {
  return (
    <>
    <Router>
      {/* <div className='app'> */}
      <div className='page-wrapper'></div>
      <Header />
      <Nav>
          <NavItems>
            <NavItems><Link to='/'>Home</Link></NavItems>
            <NavItems><Link to='/about'>About</Link></NavItems>
            <NavItems><Link to='/allNews'>All News</Link></NavItems>
          </NavItems>
      </Nav>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/allNews/:newspost" element={<AllNews />}/>
          <Route path="*" element={<ErrorPage />}/>
      </Routes>
      {/* </div> */}
    </Router>
    </>
  );
}

export default App;
