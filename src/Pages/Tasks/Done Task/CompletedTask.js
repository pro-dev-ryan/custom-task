import React from "react";
import DoneCard from "../../../Components/Completed Task/DoneCard";

const CompletedTask = () => {
  return (
    <div className="mb-5">
      <h4>Completed Task</h4>
      <div className="grid grid-cols-1 gap-2">
        <DoneCard />
      </div>
    </div>
  );
};

export default CompletedTask;
