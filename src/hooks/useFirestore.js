import { useEffect, useState } from "react";
import { fbFirestore } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

// const db = getFirestore(app);
const imageCollectionRef = collection(fbFirestore, "images")

const useFireStore = () => {
    const [docs, setDocs] = useState([]);
    const imageList = []
    useEffect(() => {
        return onSnapshot(imageCollectionRef, (snapshot) => {
            snapshot.docs.map(doc => {
                const data = doc.data()
                imageList.push({ ...data, id: doc.id, createdAt: data.createdAt.toDate() })
                setDocs(imageList)
            })
            // console.log(snapshot.docs.map(doc => doc.data()));
            
        });
       
    }, [imageList, docs])

    return { docs };
}

export default useFireStore;