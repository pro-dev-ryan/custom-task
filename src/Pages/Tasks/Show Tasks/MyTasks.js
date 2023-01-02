import React, { useState } from "react";
import Modal from "../../../Components/Modal/Modal";
import { AiOutlineClose } from "react-icons/ai";
import TaskCard from "../../../Components/TaskCard/TaskCard";
import { useAuth } from "../../../Context/FireContext";
import { usePost } from "../../../Hooks/usePost";
import { singlePost } from "../../../Functions/singlePost";
import { deleteMe } from "../../../Functions/getDelete";
import { toast } from "react-toast";
import Prompt from "../../../Components/Modal/Prompt";

const MyTasks = () => {
  const { user } = useAuth();
  const [modal, setModal] = useState(false);
  const [permit, setpermit] = useState(false);
  const [modalData, setModalData] = useState({});

  const tasks = usePost(user?.email);
  const [confirm, setConfirm] = useState(false);
  const deletePost = (id) => {
    setConfirm(!confirm);
    if (permit) {
      deleteMe(id).then((data) => {
        if (data?.status) {
          toast.success(data?.message);
          setpermit(false);
        } else {
          toast.error(data?.message);
        }
      });
    }
  };
  const updatePost = (id) => {
    singlePost(id).then((data) => {
      if (data?.status) {
        setModalData(data?.result);
        setModal(!modal);
      }
    });
  };

  return (
    <>
      <div className="mb-5 md:h-[85vh] min-h-[80vh] ">
        <h4>My Tasks</h4>
        <div className="grid grid-cols-1 lg:mt-10 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {!tasks?.length ? (
            <p className="mt-5  text-sm md:text-base lg:text-lg font-medium">
              There's no task for today, Add now
            </p>
          ) : (
            tasks?.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                updatePost={updatePost}
                deletePost={deletePost}
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
          <Modal modalData={modalData} setModal={setModal} />
        </div>
      )}
      {confirm && <Prompt setConfirm={setConfirm} setpermit={setpermit} />}
    </>
  );
};

export default MyTasks;
