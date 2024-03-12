import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Login"
import Register from './pages/register/Register';
import Forgotpassword from './pages/forgot-password/Forgot-password';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgot-password' element={<Forgotpassword/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
