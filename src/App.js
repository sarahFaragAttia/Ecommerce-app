import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import ProductDetails from './component/ProductDetails';
import SearchedCat from './component/SearchedCat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
   
        <Route path="" element={<Home/>}/>
        <Route path="/productDetails/:index" element={<ProductDetails/>}/>
        <Route path="/cat/:cat" element={<SearchedCat/>}/>
       
      </Routes>
    </BrowserRouter>)
}

export default App;
