import React from "react";

const Modal = ({ modalData, submit }) => {
  return (
    <div>
      <h4>Update Task</h4>

      <div className="p-1 flex justify-center">
        <form onSubmit={submit} className="flex flex-col gap-2 mb-5 md:w-1/2">
          <div>
            <label htmlFor="name">Task Name</label>
            <div>
              <input
                type="text"
                id="name"
                name="taskName"
                defaultValue={modalData?.name}
                className="px-1 py-1.5 mt-1 w-full rounded-md shadow-md border border-gray-500 border-opacity-10 shadow-gray-300"
              />
            </div>
          </div>
          <div>
            <label htmlFor="details">Task Detail</label>
            <div>
              <textarea
                name="details"
                defaultValue={modalData?.details}
                className="px-1 py-1.5 mt-1 w-full rounded-md shadow-md border border-gray-500 border-opacity-10 shadow-gray-300"
                id="details"
                cols="30"
                rows="8"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Update-Task"
              className="px-4 py-1 bg-teal-500 text-white my-2 rounded-full w-full md:w-1/3 hover:bg-teal-700 font-medium"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
