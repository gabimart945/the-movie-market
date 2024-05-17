import {React, useContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login} from '../views/Login'
import {Home} from '../views/Home'
import {User} from '../views/User'
import {AuthContext} from "../context/AuthContext";
import {Header} from "../components/Header";
import {Categories} from "../views/Categories";
import {MovieDetails} from "../views/MovieDetails";
import {Player} from "../views/Player"


export const GlobalRouter = () => {

    const {authToken} = useContext(AuthContext);

    const PrivateRoute = ({children}) => {
        return authToken!==null ? children : <Login/>
    }

    const Layout = ({children}) => (
        <>
            <Header />
            {children}
        </>
    )

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout><Login/></Layout>}/>
                <Route path='/home' element={<Layout><PrivateRoute><Home/></PrivateRoute></Layout>}/>
                <Route path='/categories' element={<Layout><PrivateRoute><Categories/></PrivateRoute></Layout>}/>
                <Route path="/movie/:movieId" element={<Layout><PrivateRoute><MovieDetails/></PrivateRoute></Layout>} />
                <Route path="/player/:videoId" element={<Layout><PrivateRoute><Player/></PrivateRoute></Layout>} />
                <Route path='/user' element={<Layout><PrivateRoute><User/></PrivateRoute></Layout>}/>
                <Route path="*" element={<Layout><Login/></Layout>} />
            </Routes>
        </BrowserRouter>
    )
}