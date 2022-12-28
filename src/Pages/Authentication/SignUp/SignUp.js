import React, { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const signup = () => {};
  return (
    <div>
      <h4>Sign-Up</h4>
      <div>
        <form onSubmit={signup} className="flex flex-col gap-2 mb-5 md:w-1/2">
          <div>
            <label htmlFor="name">Full Name</label>
            <div>
              <input
                type="text"
                id="name"
                name="taskName"
                className="px-1 py-1.5 mt-1 w-full rounded-md shadow-md border border-gray-500 border-opacity-10 shadow-gray-300"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                name="email"
                className="px-1 py-1.5 mt-1 w-full rounded-md shadow-md border border-gray-500 border-opacity-10 shadow-gray-300"
                id="email"
                type="email"
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <div className="relative">
              <input
                name=""
                className="px-1 py-1.5 mt-1 w-full rounded-md shadow-md border border-gray-500 border-opacity-10 shadow-gray-300"
                id="pass"
                type={`${show ? "password" : "text"}`}
              ></input>
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
          <div>
            <label htmlFor="">Upload File</label>
            <div>
              <input
                type="file"
                name="image"
                className="px-3 py-2 mt-1 w-full md:w-1/2 rounded-md shadow-md border-2 border-gray-500 border-opacity-10 md:shadow-none shadow-gray-300 "
              />
            </div>
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Sign-Up"
              className="px-4 py-1 bg-teal-500 text-white my-2 rounded-full w-1/2 md:w-1/3 hover:bg-teal-700 font-medium"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
