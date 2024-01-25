import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Header from "./pages/sections/Header";
import Footer from "./pages/sections/Footer";

import logo from './logo.svg';
import bg from './assets/img/bg.png'

function App() {
  return (
    <BrowserRouter>
        {/* <img src={bg} className="h-fit w-fit block absolute -z-40"/> */}
        <Header />
        <Routes>
          <Route element={<Landing />} path="/" />
        </Routes>
        <Footer />  
    </BrowserRouter>
  );
}

export default App;
