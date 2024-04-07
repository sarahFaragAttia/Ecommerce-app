import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import SearchedCat from './pages/SearchedCategory';
import CartPage from "./pages/CartPage"
import NavBar from './component/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
   <Route path="/cart" element={<CartPage/>}/>
        <Route path="" element={<Home/>}/>
        <Route path="/productDetails/:index" element={<ProductDetails/>}/>
        <Route path="/cat/:cat" element={<SearchedCat/>}/>
        <Route path='/login' element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
       
      </Routes>
    </BrowserRouter>)
}

export default App;
