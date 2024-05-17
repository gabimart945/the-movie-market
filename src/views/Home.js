import {MovieMatrix} from "../components/MovieMatrix";
import {useState} from "react";
import {useDiscover} from "../hooks/movies/useDiscover";
import {PageNavigation} from "../components/PageNavigation";
import '../styles/Home.css'

export const Home = () => {

    const [page, setPage] = useState(1)
    const {movies} = useDiscover(page)

    return (
        <div className='home-view'>
            <MovieMatrix movies={movies} className='home-view__matrix'/>
            <div className='home-view__pagenav'>
                <PageNavigation onChange={(newPage) => setPage(newPage)}/>
            </div>
        </div>
    )
}