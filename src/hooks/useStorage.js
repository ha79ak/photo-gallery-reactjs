import { useState, useEffect } from "react";
import { fbStorage, fbStorageRef, fbUploadBytes, fbUploadBytesResumable, fbGetDownloadURL } from '../firebase/config';

const useStorage = (file) => {

    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {

        const storageRef = fbStorageRef(fbStorage, "photo-gallery-reactjs/"+file.name);
        const uploadTask = fbUploadBytesResumable(storageRef, file);

        const metadata = {
            contentType: 'image/jpeg',
        }
        
        fbUploadBytes(storageRef, file, metadata)
        
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress)
            }, (error) => {
                setError(error)
            }, () => {
                fbGetDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL)
                })
            }
        )
    }, [file])

    return { progress, url, error }

}

export default useStorage;

// https://firebase.google.com/docs/storage/web/upload-files
