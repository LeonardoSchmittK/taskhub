import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Button, TextInput, Alert } from "flowbite-react";
import API_URLS from "../services/server-urls";
import apiService from "../services/api";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [Message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.api(
        JSON.stringify(formData),
        API_URLS.signin,
        "POST"
      );
      console.log(response);
      if (response.status === 200) {
        setMessage("Signin successfully!");
      } else {
        setMessage("Wrong email or password, please try again.");
      }
    } catch (error) {
      setMessage("Error during Signup. Please try again.");
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1 mx-auto">
          <Link to="/" className="font-semibold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gray-800 text-white rounded-lg">
              Task
            </span>
            Hub
          </Link>
          <p className="text-sm mt-5">This project is part of a study,</p>
          <p className="text-sm">Sign-In with email and password</p>
        </div>
        {/* right */}
        <form
          className="bg-white p-8 shadow-md rounded-md flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <TextInput
              type="text"
              rightIcon={AiOutlineMail}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <TextInput
              type={showPassword ? "text" : "password"}
              rightIcon={AiOutlineLock}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onTogglePassword={handleTogglePassword}
              required
            />
          </div>
          <div className="flex gap-2 text-sm">
            <span>Dont have an account?</span>
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          <Button type="submit">Sign In</Button>
          {Message && <Alert className="">{Message}</Alert>}
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
