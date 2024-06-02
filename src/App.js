import logo from "./logo.svg";
import "./App.css";
import Layout from "./pages/Layout/Layout"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import AboutUs from "./pages/AboutUs/AboutUs"
import Search from "./pages/Search/Search"
import Account from "./pages/Accoout/Account"
import Cart from "./pages/Cart/Cart"
import NoPage from "./pages/NoPage/NoPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="search" element={<Search />} />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
