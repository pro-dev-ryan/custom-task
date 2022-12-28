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
export const ContextAuth = createContext();

const FireContext = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
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
        if (User) {
          setUser(User);
        }
      });
    };
    return () => unsubscribe();
  }, []);

  const googleSign = () => {
    return signInWithPopup(auth, provider);
  };

  const updateInfo = (Name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: Name,
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
  return <ContextAuth.Provider value={contents} />;
};
export const useAuth = () => {
  const { context } = useContext(ContextAuth);
  return context;
};

export default FireContext;
