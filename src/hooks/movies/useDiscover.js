import {useContext, useEffect, useState} from "react";
import {responseToMovies} from '../../utils/Utils'
import {AuthContext} from "../../context/AuthContext";

export  const useDiscover = (page) => {

    const [movies, setMovies] = useState([]);
    const {authToken} = useContext(AuthContext)
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=es-ES&page=${page}&sort_by=popularity.desc`
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