import { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.status !== 200) {
            alert('Registration failed !!');
        }
        else {
            alert('Registration successful.');
        }
    }
    return (
        <div className="loginpage">
            <form className="register" action="" onSubmit={register}>
                <h1>Register!!</h1>
                <input type="text"
                    placeholder="Username"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)} />
                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)} />
                <button>Register</button>
            </form>
        </div>
    );
}