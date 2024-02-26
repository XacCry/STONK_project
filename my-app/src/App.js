import './App.css';
import { Route ,Routes } from "react-router-dom"
import Home from './page/Home';
import { Management } from './page/Management'
import { Payment } from './page/Payment'
import { Login } from './page/Login'
import { Signin } from './page/Signin';
import Navbar from './components/Navbar';
import { Downloadbot } from './page/Downloadbot';
function App() {
  return (
    <div className='App'>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/management" element={<Management/>} />
          <Route path="/Download_Bot" element={<Downloadbot/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/Signin' element={<Signin/>}/>
        </Routes>
    </div>
  );
}

export default App;
