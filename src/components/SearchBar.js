import React, {useEffect, useState} from 'react';
import {ReactSearchAutocomplete} from "react-search-autocomplete";
import {useSearchMovies} from "../hooks/movies/useSearchMovies";
import {useNavigate} from "react-router-dom";

export const SearchBar =() => {

    const [searchTerm, setSearchTerm] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const {results} = useSearchMovies(searchTerm)
    const navigate = useNavigate()


    useEffect(() => {
        setSuggestions(results)
    }, [results]);

    const handleOnSearch = (string, results) => {
        setSearchTerm(string)
    };

    const formatResult = (item) => {
        return (
            <>
                <span
                    style={{ display: 'block', textAlign: 'left', cursor: 'pointer' }}
                >
                    {item.name}
                </span>
            </>
        )
    }

    return (
        <ReactSearchAutocomplete
            items={suggestions}
            onSearch={handleOnSearch}
            onSelect={(item) => navigate(`/movie/${item.id}`)}
            showNoResultsText={"Sin coincidencias"}
            formatResult={formatResult}
        />
    );
}

