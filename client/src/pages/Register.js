import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import logo from './logo.svg';
// import './App.css';

function Register() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    const data = await response.json()
    
    if (data.status === 'ok' ) {
      navigate('/login')
    }
  }

  return (
    <div>
      <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            type="text" 
            placeholder="Username" 
          />
          <br></br>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
            type="text" 
            placeholder="Password" />
          <br></br>
          <input type="submit" value="Register"/>
        </form>
    </div>
  );
}

export default Register;
