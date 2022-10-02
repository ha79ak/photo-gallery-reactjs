import React from 'react'
import { motion } from "framer-motion"

const Modal = ({enlargedImg, setEnlargedImg}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setEnlargedImg(null)
        }
    }
  return (
    <motion.div className='backdrop' onClick={handleClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    >
        <motion.img 
        initial={{ y: "-50vh" }}
        animate={{ y: 0 }}
        src={enlargedImg}
            alt="enlarged pc"
            width={500}
            height={600}
            />
    </motion.div>
  )
}

export default Modal