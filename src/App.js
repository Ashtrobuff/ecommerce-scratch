import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      
     
<Route path='/login' element={<Login/>} name='login'/>
      <Route path="/Register" element={<Register/>}/>
      <Route
      
 path='/'
  element={
    <PrivateRoute>
      <Home/>
    </PrivateRoute>
  }
/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
