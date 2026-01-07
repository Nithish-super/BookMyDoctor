import { useEffect } from "react";
import Navigate from "../components/Navigate";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navi = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigate />

      <div>
        {/* Header */}
        <h1
          className="text-center font-bold bg-white/30 shadow-lg p-7 
          text-4xl font-serif sticky top-0"
        >
          Welcome to 🩺BookMyDoctor !!
        </h1>

        {/* Main Grid */}
        <div
          className="grid grid-cols-2 cursor-pointer gap-25 p-10 
          rounded-lg shadow-md"
        >
          {/* Left Column - Text */}
          <div className="ml-20 transition transform hover:scale-105">
            <h2
              className="text-center font-bold shadow-lg p-7 text-2xl font-serif 
              bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
              bg-clip-text text-transparent"
            >
              Complete and Quality Healthcare Solutions at Your Doorstep
            </h2>

            <div
              className="bg-white/50 transition transform hover:scale-105 
              hover:bg-blue-50 hover:shadow-lg"
            >
              <p className="text-xl p-5 font-semibold text-black-700 mb-2">
                Taking care of your loved ones can be challenging with
                age-related ailments, chronic illnesses, or injuries if you have
                to make rounds of healthcare facilities day and night. At
                Inhouse Medicare we provide complete and premier healthcare
                services in the comfort of your home. Located in Coimbatore, we
                deliver quality medical treatments, consultations, nursing
                services, pharmacy, physiotherapy, elderly care, palliative
                care, and diagnostic services at your doorstep.
              </p>

              <p className="text-xl p-5 font-semibold text-black-700 mb-2">
                We believe that patients heal faster in a comfortable and
                familiar environment and thus provide innovation with quality
                and a broad spectrum of healthcare services customized as per
                your and the patients’ needs and comfort, delivered to your
                doorstep.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="shadow-lg p-7 font-serif bg-gradient-to-r bg-white/50 
            pl-10 px-15 pt-10 transition transform hover:scale-105 
            hover:bg-blue-50 hover:shadow-lg"
          >
            <img
              src="/src/assets/image.png"
              alt="Hospital"
              className="w-145 h-140 mt-4 max-w-4xl"
            />
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-center mt-3">
          <button
            className="bg-green-600 p-3 rounded-lg transition transform 
            hover:scale-105 hover:bg-yellow-500 hover:shadow-lg"
            onClick={() => navi("/aboutUs")}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}