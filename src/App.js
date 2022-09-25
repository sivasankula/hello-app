import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Welcome from './Auth/Welcome';
import ViewAcademy from './Components/ViewAcademy';
import AdminAcademy from './Components/AdminAcademy';
import AdminCourse from './Components/AdminCourse';
import EnrolledCourse from './Components/EnrolledCourse';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/signup' element = {<Signup />}/>
          <Route path='/signin' element = {<Login/>}/>
          <Route path = "/" element = {<Welcome />} />
          <Route path = "/viewAcademy" element={<ViewAcademy/>} />
          <Route path = "/adminAcademy" element={<AdminAcademy/>} />
          <Route path = "/adminCourse" element={<AdminCourse/>} />
          <Route path = '/enrolledCourse' element={< EnrolledCourse/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
