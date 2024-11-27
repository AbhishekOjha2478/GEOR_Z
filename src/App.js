import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './screens/LandingPage';
import MainPage from "./screens/MainPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>         
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
