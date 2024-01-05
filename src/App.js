// import './App.css';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Home from './Components/Home/Home';
// import SearchPage from './Components/SearchPage/SearchPage';
// import LandingPage from './Components/LandingPage/LandingPage';
// import Header from './Components/Header/Header';
// function App() {
//   return (
//     <Router className="App">
//      <Header/>
//        <Routes>
//         <Route path="/" element={<LandingPage/>} />
//         <Route path="/home" element={<Home/>}/>
//         <Route path="/search" element={<SearchPage />}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SearchPage from "./Components/SearchPage/SearchPage";
import LandingPage from "./Components/LandingPage/LandingPage";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router className="App">
      <Routes>
        {/* La LandingPage se muestra sin el Header */}
        <Route path="/" element={<LandingPage />} />

        {/* Las rutas restantes incluyen el Header */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
