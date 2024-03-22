import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import ProductDetails from './component/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/productDetails/:index" element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>)
}

export default App;
