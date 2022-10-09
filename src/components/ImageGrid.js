import React from 'react'
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({setEnlargedImg}) => {
    
    const { docs } = useFirestore()

    // https://www.youtube.com/watch?v=mCqAmv771OE
    // const imageList = [
    //     {"img": "https://firebasestorage.googleapis.com/v0/b/photo-gallery-reactjs-3260a.appspot.com/o/photo-gallery-reactjs%2Fsporkforge1.png?alt=media&token=4fd512c1-0e4d-4ff9-a8b3-c75b8249a17a"},
    //     {"img": "https://media.istockphoto.com/photos/the-painter-hands-picture-id1190200652?k=20&m=1190200652&s=612x612&w=0&h=XeXAJt5Q-ieQSM1B8l4EB2qKFPrkgI-ceP9wfFspZUc="},
    //     {"img": "https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0d29ya3xlbnwwfHwwfHw%3D&w=1000&q=80"}
    // ]
// console.log("IMGLIST: ", imageList);
  return (
    <div className='img-grid'>
{/*         
        {
            imageList.map(iL => (
                <motion.div className='img-wrap' layout whileHover={{ opacity: 1 }}>
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                src={iL.img}
                alt="temporary image" 
                width={200}
                height={250}
                onClick={() => setEnlargedImg(iL.img)}
                />
                </motion.div>
            ))
        } */}
        
        {/* Firestore free limit  */}
        {
            docs && docs.map((doc) => (
                <motion.div className='img-wrap' key={doc.id} 
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setEnlargedImg(doc.downloadURL)} > 
                    <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} width={50} height={50} src={doc.downloadURL} alt={doc.fileName} />
                    <h6></h6>
                    
                </motion.div>
            ))
        }
    </div>
  )
}

export default ImageGrid