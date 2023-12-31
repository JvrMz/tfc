import { useState, createContext } from "react";

const UserContext = createContext();

function UserProvider ({ children }) {
    const [user, setUser] = useState(() => {
        const userInfo = JSON.parse(localStorage.getItem('user')) || { nombre: null, token: null };
      
        console.log(userInfo);

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