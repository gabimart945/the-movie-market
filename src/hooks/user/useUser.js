import {useContext} from "react";
import {UserContext} from "../../context/UserContext";


export const useUser = () => {

    const {user, setUser} = useContext(UserContext)

    // Simula un pulling al backend para comprobar el estado de los alquileres
    /*
    useEffect(() => {
        setInterval(() => {
            setUser(Object.assign({}, user, {
                rented: user.rented.filter((m) => m.to > Date.now())
            }))
        }, 60000)
    }, []);
    */

    const addMovieToMyList = (movieId) => {
        setUser(Object.assign({}, user, {
            myList: user.myList.concat([movieId])
        }));
    }

    const removeMovieFromMyList = (movieId) => {
        setUser(Object.assign({}, user, {
            myList: user.myList.filter((id)=> id !== movieId)
        }));
    }

    const rentMovie = (movieId, title) => {
        setUser(Object.assign({}, user, {
            rented: user.rented.concat([{movieId: movieId, title: title, from: Date.now(), to: Date.now()+(3*24*60*60*1000)}])
        }));
    }

    const acquireMovie = (movieId) => {
        setUser(Object.assign({}, user, {
            acquired: user.acquired.concat([movieId])
        }));
    }

    const canView = (movieId) => {
        const rented = user.rented.find((m) => m.movieId === movieId)
        return (rented !== undefined || user.acquired.includes(movieId))
    }

    const inMyList = (movieId) => user.myList.includes(movieId)

    return{
        addMovieToMyList,
        removeMovieFromMyList,
        rentMovie,
        acquireMovie,
        canView,
        inMyList
    }
}