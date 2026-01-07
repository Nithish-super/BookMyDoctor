import Navigate from "../components/Navigate";
import { FaHospitalAlt } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";
import { TiSocialFacebookCircular, TiSocialInstagram } from "react-icons/ti";
import { MdOutlineTimer } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ContactUs() {
  const navi = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigate />

      {/* Header */}
      <div className="bg-white/30">
        <h1
          className="text-center font-bold shadow-lg p-7 text-4xl font-serif 
          bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
          bg-clip-text text-transparent"
        >
          Contact Us
        </h1>
      </div>

      <br />

      {/* Contact Info Grid */}
      <div className="grid grid-cols-2 gap-10 p-10 bg-gray-70 rounded-lg shadow-md">
        {/* Address */}
        <div
          className="bg-white rounded-lg shadow p-6 space-y-2 
          transition transform hover:scale-105 hover:bg-blue-50 hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold text-blue-700">
            <FaHospitalAlt /> Address
          </h2>
          <p className="text-gray-700">
            Inhouse Medicare 123, Salem Road,
            <br />
            Ram Nagar, Namakkal, Tamil Nadu - 637405
          </p>
        </div>

        {/* Call */}
        <div
          className="bg-white rounded-lg shadow p-6 space-y-2 
          transition transform hover:scale-105 hover:bg-green-50 hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold text-blue-700">
            <IoIosPhonePortrait /> Call
          </h2>
          <p className="text-gray-700">9790245102 / 9600786441</p>
        </div>

        {/* Mail */}
        <div
          className="bg-white rounded-lg shadow p-6 space-y-2 
          transition transform hover:scale-105 hover:bg-yellow-50 hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold text-blue-700">
            <FaMailBulk /> Mail
          </h2>
          <p className="text-gray-700">nithishchinnannan@gmail.com</p>
        </div>

        {/* Operational Timings */}
        <div
          className="bg-white rounded-lg shadow p-6 space-y-2 
          transition transform hover:scale-105 hover:bg-purple-50 hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold text-blue-700">
            <MdOutlineTimer /> Operational Timings
          </h2>
          <p className="text-gray-700">24hrs</p>
        </div>

        {/* Social Media */}
        <div
          className="col-span-2 flex flex-col items-center justify-center 
          bg-blue-100 rounded-lg shadow p-8 mt-5 
          transition transform hover:scale-105 hover:bg-blue-50 hover:shadow-lg"
        >
          <div className="flex gap-4 text-2xl text-blue-700 mb-3">
            <TiSocialFacebookCircular />
            <TiSocialInstagram />
            <FaTwitter />
          </div>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Social Media
          </h2>
          <p className="text-gray-600">
            Follow us on Facebook, Instagram, Twitter
          </p>
        </div>

        {/* Appointment Button */}
        <div className="col-span-2 flex justify-center mt-5">
          <button
            className="bg-green-600 p-3 rounded-lg 
            transition transform hover:scale-105 hover:bg-yellow-500 hover:shadow-lg"
            onClick={() => navi("/appointmentBooking")}
          >
            Appointment Booking Time
          </button>
        </div>
      </div>
    </div>
  );
}