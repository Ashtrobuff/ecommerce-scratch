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

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      
     <Route path='/landing' element={<Landin/>}/>
<Route path='/login' element={<Login/>} name='login'/>
      <Route path="/Register" element={<Register/>}/>
      <Route
      
 exact path="/"
  element={
    <PrivateRoute>
      <Home/>
    </PrivateRoute>
  }
/>
<Route path='/shop' element={<PrivateRoute><Shopee/></PrivateRoute>}/>
<Route path='/products' element={<PrivateRoute><Products/></PrivateRoute>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
