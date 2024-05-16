import {Button} from "react-bootstrap";
import {useUser} from "../hooks/useUser";
import {useNavigate} from "react-router-dom";
import '../styles/MovieActions.css'

export const MovieActions = ({title, movieId, videoId}) => {

    const navigate = useNavigate()
    const {addMovieToMyList, rentMovie, acquireMovie, canView, inMyList, removeMovieFromMyList} = useUser()


    return (
        <div className='movie__actions'>
            {canView(movieId) ?
                <Button onClick={() => navigate(`/player/${movieId}/${videoId}`)}>Play</Button> :
                <>
                    <Button onClick={() => rentMovie(movieId, title)}>Alquilar</Button>
                    <Button onClick={() => acquireMovie(movieId)}>Comprar</Button>
                </>
            }
            {!inMyList(movieId) ?
                <Button onClick={() => addMovieToMyList(movieId)}>Añadir a mi lista</Button> :
                <Button onClick={() => removeMovieFromMyList(movieId)}>Eliminar de mi lista</Button>
            }
        </div>
    )
}
