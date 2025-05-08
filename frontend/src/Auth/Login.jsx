import React from 'react'
import { Link } from 'react-router-dom'
import './auth.css'

const Login = () => {
  return (
    <div className='container'>
  <form>
    <div className='Email'>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required style={{width:"250px"}}/>
    </div>

    <div className='Password'>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required style={{width:"250px"}}/>
    </div>
    <Link style={{ color:"black"}}>Forgot password?</Link>
    <button type="submit">Login</button>
  </form>
</div>
  )
}

export default Login