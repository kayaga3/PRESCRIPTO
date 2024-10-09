import React, { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import Doctors from './Pages/Doctors';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import MyProfile from './Pages/MyProfile';
import MyAppointments from './Pages/MyAppointments';
import Appointments from './Pages/Appointments';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/doctors'element={<Doctors/>}/>
       <Route path='/doctors/:speciality'element={<Doctors/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/my-profile' element={<MyProfile/>}/>
       <Route path='/my-appointments' element={<MyAppointments/>}/>
       <Route path='/appointments/:docId' element={<Appointments/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
