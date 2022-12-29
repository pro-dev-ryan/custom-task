import React from "react";
import { useAuth } from "../../Context/FireContext";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <div>register</div>
      <div>Login</div>
    </div>
  );
};

export default Home;
