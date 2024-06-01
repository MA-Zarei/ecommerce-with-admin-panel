import logo from "./logo.svg";
import "./App.css";
import Layout from "./pages/Layout/Layout"
import Home from "./pages/Home/Home"
import AboutUs from "./pages/AboutUs/AboutUs"
import NoPage from "./pages/NoPage/NoPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
