// import logo from './logo.svg';
import "./App.css";
import Hero from "./components/Hero";
import HotelHome from "./Hotelpage/HotelHome";
import AllHomepage from "./components/Homepage/AllHomepage";
import SeachHome from "./components/Searchpage/SeachHome";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Hero />
        <Routes>
          <Route path="/" element={<AllHomepage />} />
          <Route path="hotelhome" element={<HotelHome />} />
          <Route path="seachpage" element={<SeachHome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
