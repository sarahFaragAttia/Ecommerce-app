import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './component/pages/Home';
import ProductDetails from './component/pages/ProductDetails';
import SearchedCat from './component/pages/SearchedCat';
import CartPage from "./component/pages/CartPage"
import NavBar from './component/NavBar';
import Formik from './component/pages/FormikLogin'
import FormikLogin from './component/pages/FormikLogin';
import FormikRegister from './component/pages/FormikRegister';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
   <Route path="/cart" element={<CartPage/>}/>
        <Route path="" element={<Home/>}/>
        <Route path="/productDetails/:index" element={<ProductDetails/>}/>
        <Route path="/cat/:cat" element={<SearchedCat/>}/>
        <Route path='/login' element={<FormikLogin/>}/>
      <Route path="/register" element={<FormikRegister/>}/>
       
      </Routes>
    </BrowserRouter>)
}

export default App;
