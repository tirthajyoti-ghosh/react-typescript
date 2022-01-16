import { useState } from 'react';

type UserState = {
    name: string
    email: string
}

const User = () => {
    // const [user, setUser] = useState<UserState | null>(null);
    const [user, setUser] = useState<UserState>({} as UserState);

    const handleLogin = () => {
        setUser({
            name: 'John Doe',
            email: 'john@gtmi.com'
        });
    };

    // const handleLogout = () => {
    //     setUser(null);
    // };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>        
            {/* <button onClick={handleLogout}>Logout</button> */}
            
            <p>User is {user.email} {user.name}</p>
        </div>
    );
};

export default User;