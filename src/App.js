import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import Shopee from './components/Shopee';
import Products from './pages/Products';
import Landin from './pages/Landin';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import AllProductPage from './pages/AllProductPage';
function App() {
  return (
    
   
    <BrowserRouter>
    <Routes>
     <Route path='/landing' element={<Landin/>}/>
<Route path='/login' element={<Login/>} name='login'/>
<Route path='/browsecategory/:id' element={<CategoryPage/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route
      
 exact path="/"
  element={
    <PrivateRoute>
      <Home/>
    </PrivateRoute>
  }
/>
<Route path='/allproducts' element={<AllProductPage/>}/>
<Route path="/productpage/:id" element={<ProductPage/>}/>
<Route path='/shop' element={<PrivateRoute><Shopee/></PrivateRoute>}/>
<Route path='/products' element={<PrivateRoute><Products/></PrivateRoute>}/>
<Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
