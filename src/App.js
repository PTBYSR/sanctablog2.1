import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import AllNews from './Pages/AllNews/AllNews';
import NewsPost from './Pages/AllNews/NewsPost/NewsPost';
import ListNewsPost from './Pages/AllNews/ListNewsPost/ListNewsPost';
import ErrorPage from './Pages/Errorpage/ErrorPage';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import {
  AppContainer,
  LeftPillar,
  RightPillar,
  AppMain,
} from './App.element'
import { ReactComponent as Pillar } from './Pillar.svg'

function App() {
  return (
    <>
    <AppContainer className='flex'>
    <Router>
      <div className='page-wrapper'></div>
      <div className='old-page-wrapper'></div>
      <LeftPillar >
          <Pillar style={{visibility:'hidden'}}/>
      </LeftPillar>
      <AppMain className='app container'>
      {/* <Header /> */}
      <Nav />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/allnews" element={<ListNewsPost />}>
              <Route path='list' element={<ListNewsPost />} />
              <Route path=':id' element={<NewsPost />} />
          </Route>
          <Route path="*" element={<ErrorPage />}/>
      </Routes>
      </AppMain>
      <RightPillar>
        <Pillar style={{visibility:'hidden'}}/>
      </RightPillar>
    </Router>
    </AppContainer>
    </>
  );
}

export default App;
