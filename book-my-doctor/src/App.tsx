
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import AboutUs from './pages/AboutUs'
import AppointmentBook from './pages/AppointmentBook'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {
  return (
    <div 
      className="min-h-screen w-full flex flex-col" // flex-col stacks Nav and Routes vertically
      style={{
        backgroundImage: "url('/src/assets/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      
      <div className="flex-grow"> {/* This container holds your page content */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/appointmentBooking" element={<AppointmentBook />} />
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App