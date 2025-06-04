import { Form, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';


export default function Login(){
    const [error, setError] = useState();
    const {login} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    //console.log(location);
    const from = location.state?.from?.pathname || '/';
    // console.log(from);

    async function handleLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        //console.log(formData)

        // valider her

        const response = await fetch('http://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data), 
        });

        const userData = await response.json();

        if (!response.ok) {
            // Handle error, e.g., show an error message
            setError(userData.message || userData.error || 'Please check your credentials and try again.');
        } else {
        login(userData.accessToken); // Assuming the response contains a token
        navigate(from, { replace: true }); // Redirect to the page user tried to access before login
    }
}

    return (
        <Form onSubmit={handleLogin}>
            <div className="formgroup">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
            </div>
            <div className="formgroup">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit">Login</button>
        </Form>
    )
}