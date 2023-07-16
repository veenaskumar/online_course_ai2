// import logo from './logo.svg';
// import './App.css';
import Signup from './pages/signup';
import Loginform from './pages/login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminUpload from './pages/adminupload';
import Video_details from './components/video_details';
import Video from './pages/Video';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/' element={<Loginform/>}/>
      <Route path='/home' element={<Home />} />
      <Route path='/admin' element={<AdminUpload/>} />
      <Route path='/video' element={<Video/>} />
    </Routes>
    </BrowserRouter>
    
// import Signup from './pages/signup';


  )
}

export default App;
