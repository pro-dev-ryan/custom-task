import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toast";
import DoneCard from "../../../Components/Completed Task/DoneCard";
import Prompt from "../../../Components/Modal/Prompt";
import { deleteMe } from "../../../Functions/getDelete";

const CompletedTask = () => {
  const [prompt, setPrompt] = useState(false);
  const [remove, setRemove] = useState({});
  const comps = useLoaderData();
  const [t, setT] = useState(comps);

  const deleteTask = (id) => {
    setPrompt(!prompt);
    setRemove(id);
  };

  const handleDelete = () => {
    setPrompt(!prompt);
    deleteMe(remove).then((data) => {
      if (data?.status) {
        const exclude = t?.result?.filter((done) => done?._id !== remove);
        setT(exclude);
        toast.success(data?.message);
      }
    });
  };

  return (
    <div
      className={`${
        comps?.result?.length <= 2 ? "h-[90vh]" : "h-auto"
      } mb-5 md:h-full`}
    >
      <h4>Completed Task</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:mt-10">
        {t?.length < 1 ? (
          <h6 className="text-teal-500">Complete A task first</h6>
        ) : (
          <>
            {t?.result?.map((done) => (
              <DoneCard key={done._id} done={done} deleteTask={deleteTask} />
            ))}
          </>
        )}
      </div>
      {prompt && (
        <Prompt
          setPrompt={setPrompt}
          prompt={prompt}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default CompletedTask;
