import {useContext, useEffect, useState} from "react";
import {responseToMovies} from '../../utils/Utils'
import {AuthContext} from "../../context/AuthContext";


export  const useDiscoverByGenre = (genre, page) => {

    const [movies, setMovies] = useState([]);
    const {authToken} = useContext(AuthContext)

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=${page}&sort_by=popularity.desc&with_genres=${genre}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + authToken
        }
    };

    useEffect(() => {

        const fetchRequest = async () => {
            let res = await fetch(url, options);
            let data = await res.json();
            setMovies(responseToMovies(data));
        };

        fetchRequest();
    }, [page])

    return { movies }
}