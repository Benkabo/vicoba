import React, { createContext, useState } from "react";
import Firebase from "../utils/Firebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        onLoginPress: async (email, password) => {
          try {
            await Firebase.auth()
              .signInWithEmailAndPassword(email, password)
              .then(({ user }) => {
                Firebase.database()
                  .ref()
                  .child("uers/")
                  .child(user.uid)
                  .on("value", (doc) => {
                    setLoading(false);
                  });
              })
              .catch((error) => {
                console.log(error);
                alert(error);
              });
          } catch (error) {
            console.log(error);
          }
        },
        onRegisterPress: async (email, password) => {
          try {
            await Firebase.auth().createUserWithEmailAndPassword(
              email,
              password
            );
          } catch (e) {
            console.log(e);
          }
        },
        signOut: async () => {
          try {
            await Firebase.auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
