import React from "react";
import DoneCard from "../../../Components/Completed Task/DoneCard";

const CompletedTask = () => {
  return (
    <div className="mb-5 md:h-[85vh]">
      <h4>Completed Task</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:mt-10">
        <DoneCard />
      </div>
    </div>
  );
};

export default CompletedTask;
