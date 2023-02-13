import React, { createContext, useReducer } from "react";

export const TaskContext = createContext([]);
const ContextTasks = ({ children }) => {
  const initialState = {};

  const reducer = (state, action) => {};
  const [state, dispatch] = useReducer(reducer, initialState);

  const posts = {};
  return <TaskContext.Provider value={posts}>{children}</TaskContext.Provider>;
};

export default ContextTasks;
