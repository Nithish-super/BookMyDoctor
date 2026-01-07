import { Link } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
export default function Navigate() {
  return (
    <nav className="bg-gray-95 text-gray w-full p-8 px-10 flex justify-between items-center   relative ">
      {/* Logo / Title */}
      <h1 className="text-3xl  font-bold tracking-wide hover:text-blue-600 transition-colors">
         BookMyDoctor <FaUserDoctor />
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center space-x-10 text-lg font-bold">
        <Link to="/home" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/aboutUs" className="hover:text-blue-400 transition-colors">About Us</Link>
        <Link to="/contactUs" className="hover:text-blue-400 transition-colors">Contact Us</Link>
        
        <Link
          to="/appointmentBooking"
          className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition-all font-medium"
        >
          Book an Appointment
        </Link>
      </div>
    </nav>
  );
}