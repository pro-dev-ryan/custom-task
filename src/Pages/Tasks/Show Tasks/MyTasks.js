import React from "react";
import TaskCard from "../../../Components/TaskCard/TaskCard";

const MyTasks = () => {
  return (
    <div className="mb-5">
      <h4>My Tasks</h4>
      <div className="grid grid-cols-1 gap-2">
        <TaskCard />
      </div>
    </div>
  );
};

export default MyTasks;
