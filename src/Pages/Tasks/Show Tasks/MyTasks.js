import React, { useState } from "react";
import Modal from "../../../Components/Modal/Modal";
import { AiOutlineClose } from "react-icons/ai";
import TaskCard from "../../../Components/TaskCard/TaskCard";
import { singlePost } from "../../../Functions/singlePost";
import { deleteMe } from "../../../Functions/getDelete";
import { toast } from "react-toast";
import { useLoaderData } from "react-router-dom";
import { getUpdate } from "../../../Functions/getUpdates";

const MyTasks = () => {
  // original data
  const tasks = useLoaderData();
  const taskdata = tasks.result;
  const [t, setT] = useState(taskdata);
  // modal operation
  const [modal, setModal] = useState(false);
  // updated Data
  const [modalData, setModalData] = useState({});

  // updelete operation
  const [confirm, setConfirm] = useState(false);

  const deletePost = (id) => {
    deleteMe(id).then((data) => {
      if (data?.status) {
        const modifiedTasks = t.filter((task) => task._id !== id);
        setT(modifiedTasks);
        toast.success(data?.message);
        setConfirm(!confirm);
      } else {
        toast.error(data?.message);
      }
    });
  };
  const updatePost = (id) => {
    console.log(id);
    singlePost(id).then((data) => {
      if (data?.status) setModalData(data?.result);
      console.log(modalData);
    });
    setModal(!modal);
  };

  const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const details = form.details.value;
    const updateData = {
      name,
      details,
    };
    getUpdate(modalData?._id, updateData).then((data) => {
      if (data?.status) {
        singlePost(modalData?._id).then((data) => {
          if (data.status) {
            const exclude = t.filter((task) => task?._id !== modalData?._id);
            const mod = data?.result;
            setT([mod, ...exclude]);
          }
        });
      } else {
        toast.error(data?.message);
        setModal(false);
      }
      toast.success(data?.message);
      setModal(false);
    });
  };

  const handleComplete = (id) => {
    const completed = {
      status: true,
    };
    getUpdate(id, completed).then((data) => {
      if (data?.status) {
        singlePost(id).then((data) => {
          if (data?.status) {
            const exclude = t.filter((task) => task?._id !== id);
            const mod = data?.result;
            setT([mod, ...exclude]);
          }
        });

        toast.success("Task has been marked as completed");
      }
    });
  };

  return (
    <>
      <div className="mb-5 md:h-[85vh] min-h-[80vh] ">
        <h4>My Tasks</h4>
        <div className="grid grid-cols-1 lg:mt-10 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {!t?.length ? (
            <p className="mt-5  text-sm md:text-base lg:text-lg font-medium">
              There's no task for today, Add now
            </p>
          ) : (
            t?.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                updatePost={updatePost}
                deletePost={deletePost}
                handleComplete={handleComplete}
              />
            ))
          )}
        </div>
      </div>
      {modal && (
        <div className="bg-gray-300 bg-opacity-40 backdrop-blur-sm  fixed top-0 left-0  w-full h-full">
          <div>
            <button onClick={() => setModal(!modal)} className="mt-2 ml-5">
              <AiOutlineClose size={25} />
            </button>
          </div>
          <Modal submit={submit} modalData={modalData} />
        </div>
      )}
    </>
  );
};

export default MyTasks;
