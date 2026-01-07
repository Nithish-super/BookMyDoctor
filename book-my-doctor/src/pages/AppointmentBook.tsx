import { useEffect, useState } from "react";
import InputFile from "../components/InputFile";
import Navigate from "../components/Navigate";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/Store";
import { addData } from "../store/DataSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AppointmentBook() {
  const navi = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submit, setSubmit] = useState({
    name: "",
    DOB: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    healthIssue: "",
  });

  function submitHandle(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSubmit({ ...submit, [e.target.name]: e.target.value });
  }

  async function methodSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !submit.name.trim() ||
      !submit.email.trim() ||
      !submit.gender.trim() ||
      !submit.phone.trim() ||
      !submit.address.trim() ||
      !submit.healthIssue.trim()
    ) {
      toast("Please we want both data 🙏", {
        position: "top-center",
        style: { cursor: "pointer", color: "#221f1fff" },
      });
      return;
    }

    const res = await dispatch(
      addData({
        name: submit.name,
        DOB: submit.DOB,
        email: submit.email,
        gender: submit.gender,
        phone: submit.phone,
        address: submit.address, // fixed: was submit.phone before
        healthIssue: submit.healthIssue,
      })
    );

    res
      ? alert("Submitted Successfully 😊, we will call you 🤳")
      : console.log("Submission failed");

    setSubmit({
      name: "",
      DOB: "",
      email: "",
      gender: "",
      phone: "",
      address: "",
      healthIssue: "",
    });
  }

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
          Appointment Booking Side
        </h1>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-2">
        {/* Left Column - Booking Form */}
        <div className="relative top-0 left-20">
          <form
            className="bg-white/30 backdrop-blur-md shadow-2xl rounded-2xl 
            p-8 w-80 border border-gray-100 flex flex-col gap-4 ml-15 m-3"
            onSubmit={methodSubmit}
          >
            <h2 className="text-2xl font-bold text-blue-900">Booking Form</h2>

            <InputFile
              name="name"
              label="Name:"
              type="text"
              value={submit.name}
              onChange={submitHandle}
            />

            <InputFile
              name="DOB"
              label="DOB:"
              type="date"
              value={submit.DOB}
              onChange={submitHandle}
            />

            <InputFile
              name="email"
              label="Email:"
              type="email"
              value={submit.email}
              onChange={submitHandle}
            />

            <InputFile
              name="gender"
              label="Gender:"
              type="text"
              value={submit.gender}
              onChange={submitHandle}
            />

            <InputFile
              name="phone"
              label="Phone:"
              type="text"
              value={submit.phone}
              onChange={submitHandle}
            />

            <label className="text-sm font-semibold text-gray-700 mr-3 italic">
              Address:
            </label>
            <textarea
              name="address"
              value={submit.address}
              onChange={submitHandle}
              className="border p-4 rounded-md mb-4"
            />

            <label className="text-sm font-semibold text-gray-700 mr-3 italic">
              Health Issue:
            </label>
            <textarea
              name="healthIssue"
              value={submit.healthIssue}
              onChange={submitHandle}
              className="border p-2 rounded-md mb-4"
            />

            <Button type="submit" text="Submit" />
          </form>
        </div>

        {/* Right Column - Health Care Advice */}
        <div
          className="mr-20 mt-25 transition transform hover:scale-105 
          shadow-lg rounded-lg"
        >
          <h2
            className="text-center font-bold p-7 text-2xl font-serif 
            bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500 
            bg-clip-text text-transparent"
          >
            Health Care Advice
          </h2>

          <div
            className="bg-white/50 mt-13 m-3 p-3 rounded-lg transition 
            transform hover:scale-105 hover:bg-blue-50 hover:shadow-lg"
          >
            <p className="text-xl p-5 font-semibold text-black-700 mb-2">
              1. Prevention First 🛡️ – Vaccinations, screenings, and healthy
              lifestyle choices reduce disease before it starts.
            </p>

            <p className="text-xl p-5 font-semibold text-black-700 mb-2">
              2. Levels of Care 🏥 – Primary (basic), Secondary (specialist), and
              Tertiary (advanced) care work together for complete coverage.
            </p>

            <p className="text-xl p-5 font-semibold text-black-700 mb-2">
              3. Accessibility & Equity 🌍 – Health care must be affordable and
              available to all, regardless of income or location.
            </p>

            <p className="text-xl p-5 font-semibold text-black-700 mb-2">
              4. Community Participation 👥 – Awareness campaigns, local health
              workers, and patient involvement strengthen long-term outcomes.
            </p>

            <p className="text-xl p-5 font-semibold text-black-700 mb-2">
              5. Public + Private Systems 🤝 – Government hospitals and private
              clinics both play vital roles in delivering services.
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-3">
        <button
          className="bg-yellow-600 p-3 rounded-lg transition transform 
          hover:scale-105 hover:bg-green-500 hover:shadow-lg"
          onClick={() => navi("/home")}
        >
          Back
        </button>
      </div>
    </div>
  );
}
