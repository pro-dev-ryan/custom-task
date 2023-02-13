import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../../Context/FireContext";
import { toast } from "react-toast";
const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { googleSign, loginUser } = useAuth();
  const from = location?.state?.from?.pathname || "/";
  const loginOp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    loginUser(email, pass)
      .then((res) => {
        if (res?.user) {
          toast("Successfully Logged In", {
            backgroundColor: "teal",
            color: "white",
          });
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        toast.error("Something Went Wrong", {
          backgroundColor: "red",
          color: "white",
        });
      });
  };
  const gsign = () => {
    googleSign()
      .then((res) => {
        if (res?.user) {
          toast("Successfully Logged In", {
            backgroundColor: "teal",
            color: "white",
          });
        }
      })
      .catch((err) => {
        toast("Something Went Wrong", {
          backgroundColor: "red",
          color: "white",
        });
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen">
      <h4>Login</h4>
      <div className="p-1 flex justify-center">
        <form
          onSubmit={loginOp}
          className="flex flex-col gap-2 mb-5 w-full md:w-1/2"
        >
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="px-6 md:px-0 py-1.5 mt-1 w-full rounded-md shadow-md border border-gray-500 border-opacity-10 shadow-gray-300"
              />
            </div>
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <div className="relative">
              <input
                type={`${show ? "password" : "text"}`}
                id="pass"
                name="pass"
                className="px-6 md:px-0  py-1.5 mt-1 w-full rounded-md shadow-md border border-gray-500 border-opacity-10 shadow-gray-300"
              />
              <Link
                onClick={() => {
                  setShow(!show);
                }}
                className="absolute top-1/3 right-2"
              >
                {" "}
                {show ? <RxEyeOpen /> : <RxEyeClosed />}{" "}
              </Link>
            </div>
          </div>

          <div className="text-center mt-4">
            <input
              type="submit"
              value="Login"
              className="px-4 py-1 bg-teal-500 text-white my-2 rounded-full w-1/2 md:w-1/3 hover:bg-teal-700 font-medium"
            />
          </div>
        </form>
      </div>
      <div className="text-center">
        <p className="text-sm">
          Not an user?{" "}
          <Link to="/signup" className="text-teal-500 font-medium">
            Register
          </Link>{" "}
          here{" "}
        </p>
      </div>
      <div className="text-center mt-5 ">
        <p className="text-sm">Use social account to login</p>
        <div className="flex justify-center mt-2">
          <button onClick={gsign}>
            <FcGoogle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
