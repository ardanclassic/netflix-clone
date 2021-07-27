import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "context/firebase";

export default function UseAuthListener() {
  const { firebase } = useContext(FirebaseContext);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  useEffect(() => {
    let mounted = true;
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        mounted && setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        mounted && setUser(null);
      }
    });

    return () => (mounted = false);
  }, [firebase]);

  return user;
}
