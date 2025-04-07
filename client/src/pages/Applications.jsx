import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Applications = () => {

  const [isEdit, setIsEdit] = useState(false)
  
  return (
    <>
      <Navbar />
      <div>
        <h2>Your resume</h2>
        <div>

        </div>
      </div>
    </>
  )
}

export default Applications