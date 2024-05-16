import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import {ThemeContext} from "./context/ThemeContext";
import {AuthContext} from "./context/AuthContext";
import {GlobalRouter} from "./routes/GlobalRouter";
import {UserContext} from "./context/UserContext";
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {


    const [theme, setTheme] = useState('light')
    const [user, setUser] = useLocalStorage('user', null)
    const [authToken, setAuthToken] = useLocalStorage('auth', null)

    useEffect(() => {
            document.body.className = 'body--' + theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <AuthContext.Provider value={{authToken, setAuthToken}}>
                <UserContext.Provider value={{user, setUser}}>
                    <GlobalRouter/>
                </UserContext.Provider>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
