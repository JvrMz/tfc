import { useState, createContext } from "react";

const UserContext = createContext();

function UserProvider ({ children }) {
    const [user, setUser] = useState(() => {
        const userInfo = JSON.parse(localStorage.getItem('user')) || { username: null, token: null };

        return userInfo;
    });
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
export { UserContext };