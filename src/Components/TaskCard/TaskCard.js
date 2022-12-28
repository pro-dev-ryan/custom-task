import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../Assets/Misc/No_image_3x4.svg.png";

const TaskCard = () => {
  return (
    <div className="ring ring-teal-500 p-2">
      <div className="flex mb-2 justify-between">
        <h6>Task Name</h6>
        <p>Status: pending</p>
      </div>
      <img src={noImage} alt="task" />
      <div>
        <Link>Update</Link>
        <Link>Delete</Link>
      </div>
    </div>
  );
};

export default TaskCard;
