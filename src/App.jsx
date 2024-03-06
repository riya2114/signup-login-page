import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login-signup/Login';
import Signup from './components/login-signup/Signup';

function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App;
