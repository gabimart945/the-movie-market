import {MovieMatrix} from "../components/MovieMatrix";
import {useState} from "react";
import {useDiscover} from "../hooks/useDiscover";
import {PageNavigation} from "../components/PageNavigation";
import '../styles/Home.css'

export const Home = () => {

    const [page, setPage] = useState(1)
    const {movies} = useDiscover(page)

    return (
        <div className='home-view'>
            <MovieMatrix movies={movies}/>
            <div className='home-view__pagenav'>
                <PageNavigation onChange={(newPage) => setPage(newPage)}/>
            </div>
        </div>
    )
}