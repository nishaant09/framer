import React from 'react'
import { motion } from "framer-motion"
import "./App.css"

const App = () => {
  return (
    <div className='example-container'>
      <motion.div
        animate={{
          rotate: [0, 0, 0, 0],
          x: [0, 0, 0, 0, 0, 0, 0]
        }}
        transition={{ repeat: Infinity, duration: 1 }}
      ></motion.div>
      <motion.div className='circle green'
       whileHover={{ rotate: [0, 360], x: [0, 20] }}
        transition={{ duration: 0.5 }}></motion.div>
       <motion.div className='circle red'
      animate={{ rotate:[0,0,0,0],
      x:[0,0,0,0,0,0]}}
       transition={{repeat:Infinity,duration:1}}></motion.div>
       <motion.div className='circle blue'
      animate={{ rotate:[0,0,0,0],
      x:[0,0,0,0,0,0]}}
       transition={{repeat:Infinity,duration:1}}></motion.div>

       <motion.div className='circle yellow'
        animate={{ rotate:[0,0,0,0], x:[0,0,0,0,0,0]}}
        transition={{repeat:Infinity,duration:1}}>

       </motion.div>

       <motion.div className='circle purple'
       animate={{rotate:[0,0,0,0],x:[0,0,0,0,0,0,]}}
       transition={{repeat:Infinity,duration:1}} >

       </motion.div>

      <span className='text'>pick a color</span>
      
      
    </div>
  )
}

export default App

