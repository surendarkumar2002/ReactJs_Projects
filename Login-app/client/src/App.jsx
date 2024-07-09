import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
             <Route path='/' element={<SignUp/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route  path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App