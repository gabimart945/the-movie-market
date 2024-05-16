import {genres} from '../utils/Utils'
import '../styles/Categories.css'
import {MovieList} from "../components/MovieList";

export const Categories = () => {

    return (
        <div className='categories-view'>
            {genres.map((genre, index) => (
                <div key={index}>
                    <h2 key={'title'+index} className='categories-view__title'>{genre.name}</h2>
                    <MovieList genre={genre} key={'list'+index}/>
                </div>
            ))}
        </div>
    )
}