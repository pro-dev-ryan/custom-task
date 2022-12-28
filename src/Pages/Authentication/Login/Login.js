import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
const Login = () => {
  const [show, setShow] = useState(false);
  const loginOp = () => {};
  return (
    <div className="h-[80vh]">
      <h4>Login</h4>
      <div className="p-1 flex justify-center">
        <form onSubmit={loginOp} className="flex flex-col gap-2 mb-5 md:w-1/2">
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="email"
                id="email"
                name="taskName"
                className="px-6 py-1.5 mt-1 w-full rounded-md shadow-md border border-gray-500 border-opacity-10 shadow-gray-300"
              />
            </div>
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <div className="relative">
              <input
                type={`${show ? "password" : "text"}`}
                id="pass"
                name="taskName"
                className="px-6 py-1.5 mt-1 w-full rounded-md shadow-md border border-gray-500 border-opacity-10 shadow-gray-300"
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
    </div>
  );
};

export default Login;
