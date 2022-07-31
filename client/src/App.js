import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './login';
import Signup from './signup';
import Welcome from './welcome';
import Home from './home';
import Update from './update';
import AddNew from './addNew';
import PrivateRoute from './PrivateRoute';

// const PrivateRoute =(props) =>{
//   const loginSuccessfull = localStorage.getItem("login")
//   if (loginSuccessfull) {
//     return <Route exact={true} path={props.path} component={props.component} />
//   } else{
//     return <Login {...props} />
//   }
// }



function App() {

  
  return <div>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/signup' element={<Signup></Signup>}></Route>
  <Route element={<PrivateRoute/>}>
    <Route path='/addNew' element={<AddNew/>}/>
    <Route path='/welcome' element={<Welcome/>}/>
    <Route path='/update' element={<Update/>}/>
  </Route>
  </Routes>
  </BrowserRouter>
    </div>
  

}


export default App;
