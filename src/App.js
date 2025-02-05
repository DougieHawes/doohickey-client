import { useState } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/layout/Header";

import About from "./components/routes/public/About";
import Home from "./components/routes/public/Home";
import Contact from "./components/routes/public/Contact";
import Product from "./components/routes/public/Product";
import Products from "./components/routes/public/Products";

import SignIn from "./components/routes/auth/SignIn";

import Dashboard from "./components/routes/private/Dashboard";

import "./display/style/style.scss";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={`app ${darkmode ? "app-darkmode" : "app-lightmode"}`}>
      <Header darkmode={darkmode} onClick={() => setDarkmode(!darkmode)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productid" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route
          path={`/${process.env.REACT_APP_SIGNIN_URL}`}
          element={<SignIn />}
        />
        <Route path={"/dashboard"} element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
