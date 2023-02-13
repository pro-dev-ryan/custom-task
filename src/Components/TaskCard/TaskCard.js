import React, { useState } from "react";
import { Link } from "react-router-dom";
import noImage from "../../Assets/Misc/No_image_3x4.svg.png";
import { SlOptionsVertical } from "react-icons/sl";
const TaskCard = ({ task, updatePost, deletePost, handleComplete }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-2 border border-gray-200 border-opacity-30 rounded-md shadow  shadow-gray-200">
      <img
        src={task.url !== "" ? task.url : noImage}
        className="object-fit w-10"
        alt="task"
      />
      <div className="mb-2">
        <h6>Task Name: {task.name} </h6>
        <p
          className={`${
            task?.status ? "text-teal-500" : "text-neutral-500"
          } font-medium`}
        >
          Status: {task?.status ? "Completed" : "Pending"}
        </p>
        <p>Details: {task?.details}</p>
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
              <button
                onClick={() => {
                  updatePost(task?._id);
                  setShow(!show);
                }}
              >
                Update
              </button>
            </li>
            <li className="hover:bg-white hover:text-black w-full p-2">
              <Link
                onClick={() => {
                  deletePost(task._id);
                  setShow(!show);
                }}
              >
                Delete
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {!task?.status ? (
            <button
              onClick={() => handleComplete(task?._id)}
              className="px-3 py-1 bg-teal-500 rounded-lg font-medium text-white"
            >
              Mark as Complete
            </button>
          ) : (
            <>
              <div className="px-2 py-1 ring-teal-500 ring font-medium">
                <p>Completed</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
