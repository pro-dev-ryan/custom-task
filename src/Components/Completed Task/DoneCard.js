import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../Assets/Misc/No_image_3x4.svg.png";
import { FaTrash } from "react-icons/fa";

const DoneCard = ({ done, deleteTask }) => {
  return (
    <div className="p-2 border border-gray-200 border-opacity-30 rounded-md shadow shadow-gray-200 relative">
      <div className="absolute right-5 ">
        <button
          onClick={() => deleteTask(done?._id)}
          className="bg-transparent hover:bg-gray-300 focus:bg-teal-500 hover:shadow-sm p-2 rounded-full transition-color duration-300"
        >
          {" "}
          <FaTrash color="#ff716a" size={22} />{" "}
        </button>
      </div>
      <img src={done?.url ? done?.url : noImage} className="w-40" alt="task" />
      <div className="mb-2">
        <h6>Task Name: {done?.name}</h6>
        <p className="font-semibold text-teal-700">Status: Completed</p>
      </div>
      <div className="my-2 ">
        <ul className="flex justify-between items-center">
          <li className="text-teal-500">
            <div className="rounded-full ring px-2 ring-teal-500 ">
              Completed
            </div>
          </li>
          <li className="px-4 py-2 bg-teal-500 hover:bg-teal-700 hover:text-white rounded-md">
            <Link className="font-medium text-sm" to="/my-task">
              Comment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoneCard;
