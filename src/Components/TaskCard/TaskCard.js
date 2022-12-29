import React, { useState } from "react";
import { Link } from "react-router-dom";
import noImage from "../../Assets/Misc/No_image_3x4.svg.png";
import { SlOptionsVertical } from "react-icons/sl";
const TaskCard = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-2 border border-gray-200 border-opacity-30 rounded-md shadow shadow-gray-200">
      <img src={noImage} alt="task" />
      <div className="mb-2">
        <h6>Task Name</h6>
        <p>Status: pending</p>
        <p>Details: </p>
      </div>
      <div className="flex justify-between mt-2">
        <div className="relative">
          <button onClick={() => setShow(!show)}>
            <SlOptionsVertical />
          </button>
          <ul
            className={`absolute ${
              show ? "flex" : "hidden"
            }  flex-col text-white font-medium bg-teal-500 rounded-md left-5 top-0`}
          >
            <li className="hover:bg-white hover:text-black w-full p-2">
              <Link>Update</Link>
            </li>
            <li className="hover:bg-white hover:text-black w-full p-2">
              <Link>Delete</Link>
            </li>
          </ul>
        </div>
        <div>
          <input type="checkbox" name="" className="mr-2" id="done" />
          <label htmlFor="done">Completed</label>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
