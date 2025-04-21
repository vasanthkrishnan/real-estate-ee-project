import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase.js'
import { useNavigate } from 'react-router-dom'

const OAuth = () => {

  const navigate = useNavigate()

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)
      
      const res = await fetch('/api/auth/google', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify({ 
          name : result.user.displayName, 
          email : result.user.email, 
          photoUrl : result.user.photoURL}),
      })
      const data = await res.text()
      if(res.status === 201 || res.status === 200) {
        navigate('/')
      } 
    } catch(error) {
      console.log('could not sing in with google', error)
    }
  }

  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Continue with Google</button>
  )
}

export default OAuth