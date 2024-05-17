import {MovieCard} from "./MovieCard";
import {useDiscoverByGenre} from "../hooks/movies/useDiscoverByGenre";
import {HorizontalList} from "./HorizontalList";


export const MovieList = ({genre}) => {

    const {movies} = useDiscoverByGenre(genre.id, 1);

    return (
            <HorizontalList maxItems={7} rotate={true}>
                {movies.map((movie, index) => (
                    <MovieCard
                        key={index}
                        movie={movie}
                    />
                ))}
            </HorizontalList>
    )

}