import React, { createContext, useEffect, useReducer } from "react";
import action from "../action/actionTypes";
import { authSuccess, authFailed, authError } from "../action/actionCreator";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const initialState = {
  photoUrl: "",
  displayName: "",
  email: "",
  isLoggedIn: false,
  loading: true,
  error: "",
};

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case action.success:
      return {
        ...state,
        photoUrl: payload.photoUrl,
        displayName: payload.displayName,
        email: payload.email,
        isLoggedIn: true,
        loading: false,
        error: "",
      };
    case action.failed:
      return {
        ...state,
        photoUrl: "",
        displayName: "",
        email: "",
        isLoggedIn: false,
        loading: false,
        error: "",
      };
    case action.error:
      return {
        ...state,
        photoUrl: "",
        displayName: "",
        email: "",
        isLoggedIn: false,
        loading: false,
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(reducer, initialState);

  // On auth state changed

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const payload = {
          photoUrl: user.photoURL,
          displayName: user.displayName,
          email: user.email,
        };
        dispatch(authSuccess(payload));
      } else {
        dispatch(authFailed());
      }
    });

    return () => unsubscribe();
  }, []);

  // Handle sign in
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      dispatch(authError());
      toast.error(err.message);
    }
  };

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      dispatch(authError());
      toast.error(err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ authState, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
