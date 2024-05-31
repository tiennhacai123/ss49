import React from 'react'

export default function Login() {
  return (
    <div>
        <h2>Login account</h2>
        <label htmlFor="">Your email</label><br />
        <input type="text" /><br />
        <label htmlFor="">Password</label><br />
        <input type="text" /><br /> <br />
        <button>Login an account</button>
        <p>Already have an account?<b>register here</b></p>
    </div>
  )
}
