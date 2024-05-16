import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {responseToDetails} from "../utils/Utils";


export const useMovieDetails = (movieId) => {

    const [details, setDetails] = useState(null);
    const {authToken} = useContext(AuthContext)
    const url = `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos,credits&language=es-ES`
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
            setDetails(responseToDetails(data));
        };

        fetchRequest();
    }, [])

    return { details }
}