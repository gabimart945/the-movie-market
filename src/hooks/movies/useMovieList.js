import {useContext, useEffect, useState} from "react";
import {responseToMovie} from '../../utils/Utils'
import {AuthContext} from "../../context/AuthContext";

export  const useMovieList = (movieIds) => {

    const [movies, setMovies] = useState([]);
    const {authToken} = useContext(AuthContext)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + authToken
        }
    };

    useEffect(() => {

        let allMovies = []

        const fetchRequest = async (url) => {
            let res = await fetch(url, options);
            let data = await res.json();
            allMovies.push(responseToMovie(data));
            if (allMovies.length === movieIds.length){
                setMovies(allMovies)
            }
        };

        movieIds.forEach((movieId)=> {
            const url = `https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`;
            fetchRequest(url);
        })

    }, [movieIds])

    return { movies }
}