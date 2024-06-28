import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Component/Header';
import Category from './Component/Category';
import Product from './Component/Product';
import Allprod from './Component/Allprod';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Register from './Component/Register';
import Log from './Component/Log';
import Logout from './Component/Logout';

function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/cate" element={<Category />}></Route>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/product/:catname" element={<Product/>}></Route>
          <Route exact path="/all" element={<Allprod/>}></Route>
          <Route exact path="/abt" element={<About/>}></Route>
          <Route exact path="/cont" element={<Contact/>}></Route>
          <Route exact path="/reg"  element={<Register/>}></Route>
          <Route exact path="/login" element={<Log/>}></Route>
          <Route exact path="/out" element={<Logout/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
