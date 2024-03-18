import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import SalesForm from './components/SalesForm';
import IncentiveForm from './components/IncentiveForm';
import HolidayPackageForm from './components/HolidayPackageForm';
import AdminPanel from './components/AdminPanel';
import AuthForm from './components/AuthForm';
import RegistrationForm from './components/RegistrationForm';
import HolidayScreen from './components/HolidayScreen';
import HolidayAdmin from './components/HolidayAdmin';
import Footer from './components/Footer';
import LandingScreen from './components/LandingScreen';
import AboutScreen from './components/AboutScreen';


function App() {
  return (
    <div className="App">
      <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<LandingScreen/>}/>
      <Route path= "/about" element={<AboutScreen/>}/>
      <Route path="/register" element={<RegistrationForm/>}/>
      <Route path="/login" element= {<AuthForm/>}/>
      <Route path="/sales" element= {<SalesForm/>}/> 
      <Route path="/incentives" element= {<IncentiveForm/>}/>  
      <Route path="/holiday-packages" element= {<HolidayPackageForm/>}/> 
      <Route path="/admin" element= {<AdminPanel/>}/>
      <Route path= "/holiday" element= {<HolidayScreen/>}/>
      <Route path= "/holiday-ad" element={<HolidayAdmin/>}/>

        
      
    </Routes>

    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
