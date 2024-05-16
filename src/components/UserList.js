import {MovieCard} from "./MovieCard";
import {HorizontalList} from "./HorizontalList";
import {useMovieList} from '../hooks/useMovieList'

export const UserList = ({movieIds}) => {

    const {movies} = useMovieList(movieIds)

    return(

                    <HorizontalList maxItems={4} rotate={true}>
                        {movies.map((movie, index) => (
                            <MovieCard
                                key={index}
                                movie={movie}
                            />
                        ))}
                    </HorizontalList>


    )
}