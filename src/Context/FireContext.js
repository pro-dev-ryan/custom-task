import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const ContextAuth = createContext();
const FireContext = ({ children }) => {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (User) => {
        setUser(User);
      });
    };
    return () => unsubscribe();
  }, [user, auth]);
  const googleSign = () => {
    return signInWithPopup(auth, provider);
  };

  const updateInfo = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const logOut = () => {
    return signOut(auth);
  };

  const contents = {
    user,
    userSignUp,
    loginUser,
    logOut,
    updateInfo,
    googleSign,
  };
  return (
    <ContextAuth.Provider value={contents}> {children} </ContextAuth.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(ContextAuth);
  return context;
};

export default FireContext;
