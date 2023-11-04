import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";

export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Auth Details</h1>
      <div className="alert alert-success" role="alert">
        {authUser ? (
          <div>
            Signed In as {authUser.email}
            <a href="#" className="alert-link" onClick={userSignOut}>
              Sign Out
            </a>
          </div>
        ) : (
          <div>Signed out</div>
        )}
      </div>
    </>
  );
};
