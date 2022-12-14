import { useState } from 'react'

// import logo from './logo.svg';
// import './App.css';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
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

    if (data.user) {
      localStorage.setItem('token', data.user)
      alert('Login success')
      window.location.href = '/dashboard'
    } else {
      alert('Please check your username and password')
    }

    console.log(data)
  }

  return (
    <div>
      <h1>Login</h1>
        <form onSubmit={loginUser}>
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
          <input type="submit" value="Login"/>
        </form>
    </div>
  );
}

export default Login;
