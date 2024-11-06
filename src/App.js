import Navbar from './Components/Navbar/Navbar';
//import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Weather from './Components/Weather/Weather';
import Errorpage from './Components/Errorpage/Errorpage';

function App() {

  return (
    <>
    <BrowserRouter>
   <Navbar/>
    <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
     
    </BrowserRouter>
    <footer>
    <p>  <i>Created with ❤️by Neha</i></p>
    </footer>
    
    </>
  );
}

export default App;
