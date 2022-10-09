// import { collection, doc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { 
    fbStorage,
    fbStorageRef, 
    fbUploadBytesResumable, 
    fbGetDownloadURL, 
    fbFirestore, 
    fbCollection, 
    fbAddDoc, 
    timestamp 
} from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {

        const storageRef = fbStorageRef(
            fbStorage, 
            "photo-gallery-reactjs/"+file.name
            );

        const uploadTask = fbUploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                console.log("SNAPSHOT: ", snapshot);
                const progress = (
                    snapshot.bytesTransferred / snapshot.totalBytes
                    ) * 100;
                setProgress(progress)
            }, (error) => {
                setError(error)
            }, () => {
                fbGetDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const createdAt = timestamp();
                    const fileName = uploadTask.snapshot.ref.name;
                    fbAddDoc(fbCollection(fbFirestore, "images"), {
                        downloadURL, createdAt, fileName
                    })
                    setUrl(downloadURL)
                    // // is equal to :
                    // const aNewRef = doc(collection(fbFirestore, "images"));
                    // setDoc(aNewRef, {
                    //     downloadURL, createdAt, fileName
                    // })
                    // setUrl(downloadURL)
                })
            }
        )

    }, [file])
    return { progress, url, error }

}

export default useStorage;

// https://firebase.google.com/docs/storage/web/upload-files
