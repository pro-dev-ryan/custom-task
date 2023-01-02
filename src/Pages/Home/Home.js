import React from "react";
import img1 from "../../Assets/Box-icons/security.png";
import img2 from "../../Assets/Box-icons/userFriendly.png";
import img3 from "../../Assets/Box-icons/256x256.png";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-3 my-2  lg:gap-5">
      <h4>Recently Added Tasks </h4>
      <div className="flex flex-col items-center gap-3 md:gap-5 lg:gap-10">
        <div className="flex border p-2 md:p-3 gap-2 md:w-1/2  lg:p-5 border-gray-100 shadow-md shadow-gray-200 rounded-md">
          <img
            src="https://api.lorem.space/image/face?w=50&h=50&hash=4F32C4CF"
            className="object-cover"
            alt=""
          />
          <div>
            <p className="text-sm md:text-base lg:text-lg">
              {" "}
              <span className="font-medium ">Task:</span> Office Meeting with
              Jane Doe
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              {" "}
              <span className="font-medium">Time:</span> 5.05 PM
            </p>
          </div>
        </div>
        <div className="flex border p-2 md:p-3 gap-2 md:w-1/2  lg:p-5 border-gray-100 shadow-md shadow-gray-200 rounded-md">
          <img
            src="https://api.lorem.space/image/face?w=50&h=50"
            className=" object-cover"
            alt=""
          />
          <div>
            <p className="text-sm md:text-base lg:text-lg">
              {" "}
              <span className="font-medium md:text-base lg:text-lg">
                Task:
              </span>{" "}
              Going to shopping mall for next fashion show
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              {" "}
              <span className="font-medium">Time:</span> 12.50 PM
            </p>
          </div>
        </div>
        <div className="flex border p-2 md:p-3 gap-2 md:w-1/2  lg:p-5 border-gray-100 shadow-md shadow-gray-200 rounded-md">
          <img
            src="https://api.lorem.space/image/face?w=50&h=50&hash=2D297A22"
            className="object-cover"
            alt=""
          />
          <div>
            <p className="text-sm md:text-base lg:text-lg">
              {" "}
              <span className="font-medium">Task:</span> Submit physics theory
              of ignition and friction
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              {" "}
              <span className="font-medium">Time:</span> 9.00 AM
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 my-2 md:my-3 lg:my-5">
        <div className="flex flex-col rounded-md items-center p-2 md:p-3 lg:p-5 border border-gray-200 shadow-md">
          {" "}
          <img src={img1} className="w-16" alt="" />{" "}
          <div className="text-center my-2">
            <h6>Secure</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              enim officia dolore reprehenderit quasi
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-md items-center p-2 md:p-3 lg:p-5 border border-gray-200 shadow-md">
          {" "}
          <img src={img2} className="w-20" alt="" />{" "}
          <div className="text-center my-2">
            <h6>User Friendly</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              ipsam quasi quia quaerat sed id{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-md items-center p-2 md:p-3 lg:p-5 border border-gray-200 shadow-md">
          {" "}
          <img src={img3} className="w-16 " alt="" />{" "}
          <div className="text-center my-2">
            <h6>Time-Manager</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quod, itaque suscipit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
