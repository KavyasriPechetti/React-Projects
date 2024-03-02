import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignIn = (event) => {
        event.preventDefault();
        if (username.length < 8) {
            setMessage('Username must be atleast 8 characters long');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setMessage('Password must contain at least one capital letter');
            return;
        }
        

        setMessage(`Logged in with username: ${username}`);
       
    };

    return (
        <div className='log'>
        <div className='log1'>
            <h2>Login Form</h2><br/>
            <form onSubmit={handleSignIn} noValidate>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />
                </div><br/>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div><br/>
               <Link to="/navbar"><button type="submit">Log In</button></Link>
            </form>
            <p>{message}</p>
        </div>
        </div>
    );
}

export default LoginForm;