import { useEffect } from "react";
import Navigate from "../components/Navigate";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
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
          About Us
        </h1>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-2 cursor-pointer gap-25 p-10 rounded-lg shadow-md">
        {/* Left Column */}
        <div className="ml-20 transition transform hover:scale-105">
          <h4
            className="text-center font-bold shadow-lg p-7 text-2xl font-serif 
            bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
            bg-clip-text text-transparent"
          >
            The Best At-Home Medical Provider in Namakkal:
          </h4>

          <div
            className="bg-white/50 transition transform hover:scale-105 
            hover:bg-blue-50 hover:shadow-lg"
          >
            <p className="text-xl p-5 font-semibold text-black-700 mb-2">
              Get treated in the comfort of your home by our highly qualified
              doctors.
            </p>

            <p className="text-xl p-5 font-semibold text-black-700 mb-2">
              Inhouse Medicare is the most trusted and leading provider of home
              healthcare services to people of all ages in Coimbatore. We
              provide timely, high-quality medical care as well as diagnostic
              services right at your front door. Our experienced medical team
              assists patients suffering with a chronic medical condition,
              recovering from an illness or injury, or dealing with the
              challenges of ageing in the comfort of their own homes. Our
              constant goal is to build trust and reliability and to provide
              excellence in healthcare through active collaboration with
              patients, their families, and other healthcare providers.
            </p>

            <p className="text-xl p-5 font-semibold text-black-700 mb-2">
              We understand how difficult it may be to find the perfect elderly
              care service or senior assistance. You want to make sure that your
              loved one is being looked after and is receiving the best possible
              care. This is why we meticulously train our caregivers to provide
              high-quality geriatric care. We make certain that they are
              reference-checked, qualified, and compassionate even before they
              come into your house.
            </p>
          </div>
        </div>

        {/* Right Column - Video */}
        <div
          className="shadow-lg p-7 font-serif bg-gradient-to-r bg-white/50 
          pl-10 px-15 pt-10 transition transform hover:scale-105 
          hover:bg-blue-50 hover:shadow-lg"
        >
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/1UPUGcnS0Tw"
            title="About Us Video"
          ></iframe>
        </div>
      </div>

      {/* Contact Button */}
      <div className="text-center mt-3">
        <button
          className="bg-green-600 p-3 rounded-lg transition transform 
          hover:scale-105 hover:bg-yellow-500 hover:shadow-lg"
          onClick={() => navi("/contactUs")}
        >
          Contact
        </button>
      </div>
    </div>
  );
}