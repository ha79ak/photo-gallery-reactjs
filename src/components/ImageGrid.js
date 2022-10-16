import React from 'react'
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const ImageGrid = ({setEnlargedImg}) => {
    
    const { docs } = useFirestore()
    // console.log("=> ", docs);
    // https://www.youtube.com/watch?v=mCqAmv771OE
    const imageList = [
        {"img": "https://media.istockphoto.com/photos/used-brushes-on-an-artists-palette-of-colorful-oil-paint-picture-id636761588?k=20&m=636761588&s=612x612&w=0&h=ew-Gc9JIh5PGLbxaW21a0Y4D_w7d1zsngEPX74e5HDs="},
        {"img": "https://media.istockphoto.com/photos/the-painter-hands-picture-id1190200652?k=20&m=1190200652&s=612x612&w=0&h=XeXAJt5Q-ieQSM1B8l4EB2qKFPrkgI-ceP9wfFspZUc="},
        {"img": "https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0d29ya3xlbnwwfHwwfHw%3D&w=1000&q=80"},
        {"img": "https://media.istockphoto.com/photos/used-brushes-on-an-artists-palette-of-colorful-oil-paint-picture-id636761588?k=20&m=636761588&s=612x612&w=0&h=ew-Gc9JIh5PGLbxaW21a0Y4D_w7d1zsngEPX74e5HDs="},
        {"img": "https://media.istockphoto.com/photos/the-painter-hands-picture-id1190200652?k=20&m=1190200652&s=612x612&w=0&h=XeXAJt5Q-ieQSM1B8l4EB2qKFPrkgI-ceP9wfFspZUc="},
        {"img": "https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0d29ya3xlbnwwfHwwfHw%3D&w=1000&q=80"},
        {"img": "https://media.istockphoto.com/photos/used-brushes-on-an-artists-palette-of-colorful-oil-paint-picture-id636761588?k=20&m=636761588&s=612x612&w=0&h=ew-Gc9JIh5PGLbxaW21a0Y4D_w7d1zsngEPX74e5HDs="},
        {"img": "https://media.istockphoto.com/photos/the-painter-hands-picture-id1190200652?k=20&m=1190200652&s=612x612&w=0&h=XeXAJt5Q-ieQSM1B8l4EB2qKFPrkgI-ceP9wfFspZUc="},
        {"img": "https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0d29ya3xlbnwwfHwwfHw%3D&w=1000&q=80"},
        {"img": "https://media.istockphoto.com/photos/used-brushes-on-an-artists-palette-of-colorful-oil-paint-picture-id636761588?k=20&m=636761588&s=612x612&w=0&h=ew-Gc9JIh5PGLbxaW21a0Y4D_w7d1zsngEPX74e5HDs="},
        {"img": "https://media.istockphoto.com/photos/the-painter-hands-picture-id1190200652?k=20&m=1190200652&s=612x612&w=0&h=XeXAJt5Q-ieQSM1B8l4EB2qKFPrkgI-ceP9wfFspZUc="},
        {"img": "https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0d29ya3xlbnwwfHwwfHw%3D&w=1000&q=80"}
    ]
// console.log("IMGLIST: ", imageList);
  return (
    <div 
    // className='img-grid'
    >
        
            <ImageList variant="masonry" cols={3} gap={8}>
                {imageList.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    src={item.img}
                    srcSet={item.img}
                    alt={item.title}
                    loading="lazy"
                    onClick={() => setEnlargedImg(item.img)}
                    />
                </ImageListItem>
                ))}
            </ImageList>

        {/* {
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
        {/* {
            docs && docs.map((doc) => (
                <motion.div className='img-wrap' key={doc.id} 
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setEnlargedImg(doc.downloadURL)} > 
                    <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} width={50} height={50} src={doc.downloadURL} alt={doc.fileName} />
                    <h6></h6>
                    
                </motion.div>
            ))
        } */}
    </div>
  )
}

export default ImageGrid