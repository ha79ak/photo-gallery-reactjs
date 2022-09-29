import { useEffect } from "react";
import useStorage from "../hooks/useStorage";


const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if(url) {
            setFile(null)
        }
    }, [url, setFile])
    return (
        <div className="progress-bar" style={{
            width: progress + '%',
            height: '5px',
            background: '#abde82',
            marginTop: '20px',
        }} />
    )
}

export default ProgressBar;