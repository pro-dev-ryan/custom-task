import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../Assets/Misc/No_image_3x4.svg.png";

const DoneCard = () => {
  return (
    <div className="p-2 border border-gray-200 border-opacity-30 rounded-md shadow shadow-gray-200">
      <img src={noImage} alt="task" />
      <div className="mb-2">
        <h6>Task Name</h6>
        <p>Status: Completed</p>
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
              Not Completed
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoneCard;
