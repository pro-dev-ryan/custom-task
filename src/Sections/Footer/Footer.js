import React from "react";

const Footer = () => {
  return (
    <div className="bg-teal-300 flex md:flex-row flex-col md:justify-center items-center lg:gap-2">
      <p> &reg;2022 Created By </p>
      <p>
        {" "}
        <span className="text-gray-500 font-bold">
          Azizul Islam
        </span> &copy;{" "}
      </p>
    </div>
  );
};

export default Footer;
