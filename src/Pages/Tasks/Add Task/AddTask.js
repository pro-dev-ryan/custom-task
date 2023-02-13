import React, { useReducer } from "react";
import { useAuth } from "../../../Context/FireContext";
import { addPost } from "../../../Functions/addPost";
import { getImage } from "../../../Functions/getUrl";
import { toast } from "react-toast";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const initialState = {
    taskName: "",
    details: "",
    image: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FIELDS":
        return { ...state, [action.payload.name]: action.payload.value };
      default:
        return state;

      case "FILE":
        return { ...state, [action.payload.name]: action.payload.files };

      case "CLEAR-ALL":
        return { initialState };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { user } = useAuth();
  const submit = (e) => {
    e.preventDefault();
    const name = state.taskName;
    const details = state.details;
    const userName = user.displayName;
    const email = user?.email;
    const status = false;
    const img = state.image;
    getImage(img)
      .then((data) => {
        if (data.success) {
          const url = data.data.display_url;
          const taskData = {
            name,
            details,
            url,
            status,
            userName,
            email,
          };
          addPost(taskData)
            .then((data) => {
              if (data.status) {
                toast.success(`${data.message}`);
                dispatch({
                  type: "CLEAR-ALL",
                  payload: { name: e.target, value: e.target.value },
                });
                navigate(`/my-task/${user?.email}`);
              }
            })
            .catch((err) => {
              console.error(err);
              toast.error(err.message);
            });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="md:min-h-screen">
      <h4>Add New Task</h4>
      {!user?.uid && (
        <p className="text-rose-400 text-sm md:text-base lg:text-lg  text-center">
          Login to add task
        </p>
      )}
      <div className="p-1 flex justify-center">
        <form onSubmit={submit} className="flex flex-col gap-2 mb-5 md:w-1/2">
          <div>
            <label htmlFor="name">Task Name</label>
            <div>
              <input
                type="text"
                id="name"
                name="taskName"
                onBlur={(e) => {
                  dispatch({
                    type: "FIELDS",
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
                className="px-1 py-1.5 mt-1 w-full rounded-md shadow-md border border-gray-500 border-opacity-10 shadow-gray-300"
              />
            </div>
          </div>
          <div>
            <label htmlFor="details">Task Detail</label>
            <div>
              <textarea
                name="details"
                className="px-1 py-1.5 mt-1 w-full rounded-md shadow-md border border-gray-500 border-opacity-10 shadow-gray-300"
                id="details"
                onBlur={(e) => {
                  dispatch({
                    type: "FIELDS",
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
                cols="30"
                rows="8"
              ></textarea>
            </div>
          </div>
          <div>
            <label htmlFor="">Upload File</label>
            <div>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  dispatch({
                    type: "FILE",
                    payload: { name: e.target.name, files: e.target.files[0] },
                  });
                }}
                className="px-3 py-2 mt-1 w-full md:w-1/2 rounded-md shadow-md border-2 border-gray-500 border-opacity-10 md:shadow-none shadow-gray-300 "
              />
            </div>
          </div>
          <div className="text-center">
            {user?.uid && (
              <input
                type="submit"
                value="Add-Task"
                className="px-4 py-1 bg-teal-500 text-white my-2 rounded-full w-full md:w-1/3 hover:bg-teal-700 font-medium"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
