
import './App.css';
//Aca va a ir el header
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import SearchPage from './Components/SearchPage/SearchPage';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
function App() {
  return (
    <Router className="App">
     
       <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/search" element={<SearchPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
