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

  return (
    <div>
      {authUser ? <p>Signed In as: {authUser.email}</p> : <p>Signed Out</p>}
    </div>
  );
};
