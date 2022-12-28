import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between mt-2">
        <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-bold ">
          Do-It
        </Link>
        <div className="md:hidden block">
          <button onClick={() => setShow(!show)}>
            <RxHamburgerMenu size={25} />
          </button>
        </div>
        <div
          className={`${
            show ? "flex-col" : "hidden md:flex"
          }  absolute flex bg-white p-3 right-0 top-6 md:static gap-5 mr-2 text-sm md:text-base  font-medium`}
        >
          <div className="focus:bg-teal-500">
            <Link to="/add-task" className="hover:scale-125 duration-75 ">
              Add Task
            </Link>
          </div>

          <div className="focus:bg-teal-500">
            <Link to="/my-task" className="hover:scale-125 duration-75 ">
              My Task
            </Link>
          </div>
          <div className="focus:bg-teal-500">
            <Link to="/done-task" className="hover:scale-125 duration-75 ">
              Completed Task
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
