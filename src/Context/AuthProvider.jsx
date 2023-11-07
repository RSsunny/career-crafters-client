import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

import useAxios from "../Hooks/useAxios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const axios = useAxios();

  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userlogin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const midealogin = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      const userEmail = currentuser?.email || user?.email;

      const emailuser = { email: userEmail };

      setUser(currentuser);
      setLoding(false);

      if (currentuser) {
        try {
          axios.post("/jwt", emailuser).then().catch();
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          axios
            .post("/userlogout", emailuser)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }
      }
    });
    return () => {
      unSubscribe;
    };
  }, [user, axios]);
  const authInfo = {
    user,
    loding,
    createUser,
    userlogin,
    midealogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
