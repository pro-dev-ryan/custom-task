import React from "react";
import Load from "./Loader.module.css";
const Loader = () => {
  return (
    <div id={Load.preloader}>
      <div id={Load.loader}></div>
    </div>
  );
};

export default Loader;
