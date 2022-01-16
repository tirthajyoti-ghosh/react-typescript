import {useState} from 'react';

const LoggedIn = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User is {loggedIn ? 'logged in' : 'logged out'}</p>
        </div>
    );
};

export default LoggedIn;