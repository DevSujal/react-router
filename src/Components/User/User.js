import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-black text-white font-bold text-xl p-6'>
      User : {userid}
    </div>
  )
}

export default User
