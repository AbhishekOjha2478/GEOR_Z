import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './screens/LandingPage';
import MainPage from "./screens/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>         
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
