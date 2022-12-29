import React from "react";
import TaskCard from "../../../Components/TaskCard/TaskCard";

const MyTasks = () => {
  return (
    <div className="mb-5 md:h-[85vh]">
      <h4>My Tasks</h4>
      <div className="grid grid-cols-1 lg:mt-10 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <TaskCard />
      </div>
    </div>
  );
};

export default MyTasks;
