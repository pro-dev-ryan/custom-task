import React from "react";

const Prompt = ({ setPrompt, prompt, handleDelete }) => {
  return (
    <div className="w-2/3 top-[30vh] md:right-[30vw] bg-white shadow-md fixed md:w-1/3 flex flex-col ring ring-teal-700 md:flex-col  gap-3 p-3 md:p-5 rounded-lg">
      <h6>Are you sure, you want to Delete this post?</h6>
      <div className="flex mx-2 my-1 justify-between">
        <button
          onClick={() => setPrompt(!prompt)}
          className="px-3 py-1 rounded-md border border-teal-500 hover:bg-teal-500 focus:bg-teal-500 transition-colors duration-100 font-medium hover:text-white focus:text-white"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className="px-3 py-1 border border-red-500 hover:bg-red-500 focus:bg-red-500  transition-colors duration-100 rounded-md font-medium hover:text-white focus:text-white"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Prompt;
