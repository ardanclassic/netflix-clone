import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "context/firebase";

export default function UseContent(target) {
  const { firebase } = useContext(FirebaseContext);
  const [content, setContent] = useState([]);

  useEffect(() => {
    let mounted = true;

    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        mounted && setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });

    return () => (mounted = false);
  }, [firebase, target]);

  return { [target]: content };
}
