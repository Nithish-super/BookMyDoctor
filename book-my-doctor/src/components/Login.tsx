import { useEffect, useState } from 'react';
import InputFile from './InputFile';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from "../store/Store.ts";
import { addDetail, fetchDetail } from '../store/DetailSlice.ts';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    dispatch(fetchDetail());
  }, [dispatch]);

  const details = useSelector((state: RootState) => state.details.list);
  console.log(details);

  function methodSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 1. Find if a user exists with matching email AND password
    const userExists = details.find(
      detail => detail.email === form.email && detail.password === form.password
    );

    // 2. Perform action based on whether user was found
    if (userExists) {
      navigate('/home');
    } else {
      toast("Invalid Entered 😅", {
        position: "top-center",
        style: { cursor: "pointer", color: "#221f1fff" }
      });
    }
  }

  const [signInForm, setSignInForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  function signChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [signIn, setSignIn] = useState<string | null>(null);

  function startSignIn() {
    setSignIn("string");
  }

  function EndSignIn() {
    setSignIn(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !signInForm.name.trim() ||
      !signInForm.email.trim() ||
      !signInForm.password.trim()
    ) {
      toast('Enter both data 🙌', {
        position: "top-center",
        style: { cursor: "pointer", color: "#221f1fff" }
      });
      return;
    }

    await dispatch(addDetail({
      name: signInForm.name,
      email: signInForm.email,
      password: signInForm.password
    }));

    setSignInForm({ name: '', email: '', password: '' });
    EndSignIn();
  }

  return (
    <div>
      {/* Login Form */}
      <form
        className="bg-white/30 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-80 border border-gray-100 flex flex-col gap-4 ml-7 m-3"
        onSubmit={methodSubmit}
      >
        <InputFile
          name="email"
          label="Email:"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <InputFile
          name="password"
          label="Password:"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <Button type="submit" text="Login" />

        <div className="flex flex-col gap-2 mt-2">
          <a className="text-blue-600 hover:underline text-xs cursor-pointer">
            Create an Account
          </a>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition text-sm"
            onClick={() => startSignIn()}
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>

      {/* Sign Up Form */}
      {signIn && (
        <div className="flex flex-col ml-3 absolute top-3 left-4 ...">
          <form
            className="bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-80 border border-gray-100 flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold text-blue-900">
              Create a New Account
            </h2>

            <InputFile
              name="name"
              label="Name:"
              type="text"
              value={signInForm.name}
              onChange={signChange}
            />

            <InputFile
              name="email"
              label="Your Email:"
              type="email"
              value={signInForm.email}
              onChange={signChange}
            />

            <InputFile
              name="password"
              label="Confirm Password:"
              type="password"
              value={signInForm.password}
              onChange={signChange}
            />

            <Button type="submit" text="Register" />

            <div className="flex flex-col gap-2 mt-2">
              <a
                className="text-blue-600 hover:underline text-xs cursor-pointer"
                onClick={() => EndSignIn()}
              >
                Already have an Account?
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}  