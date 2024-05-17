import {useContext, useEffect, useState} from "react";
import {responseToMovies} from '../../utils/Utils'
import {AuthContext} from "../../context/AuthContext";

export  const useSearchMovies = (searchTerm) => {

    const [results, setResults] = useState([]);
    const {authToken} = useContext(AuthContext)

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchTerm)}&include_adult=false&language=es-ES&page=1`;
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
            setResults(data.results.map((result) => ({id: result.id, name: result.title})));
        };

        fetchRequest();
    }, [searchTerm])

    return { results }
}