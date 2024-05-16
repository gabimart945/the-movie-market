import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useUser} from "../hooks/useUser";
import {useNavigate} from "react-router-dom";
import '../styles/MovieActions.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faClock, faPlay, faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";

export const MovieActions = ({title, movieId, videoId}) => {

    const navigate = useNavigate()
    const {addMovieToMyList, rentMovie, acquireMovie, canView, inMyList, removeMovieFromMyList} = useUser()


    return (
        <div className='movie__actions'>
            {canView(movieId) ?
                <Button variant="success" onClick={() => navigate(`/player/${movieId}/${videoId}`)}><FontAwesomeIcon icon={faPlay} /> Play</Button> :
                <>
                    <Button onClick={() => rentMovie(movieId, title)}><FontAwesomeIcon icon={faClock} /> Alquilar</Button>
                    <Button onClick={() => acquireMovie(movieId)}><FontAwesomeIcon icon={faCartShopping} /> Comprar</Button>
                </>
            }
            {!inMyList(movieId) ?
                <Button
                    onClick={() => addMovieToMyList(movieId)}
                >
                    <FontAwesomeIcon icon={faPlus} />
                    <span> Mi lista</span>
                </Button> :
                <Button
                    variant="danger"
                    onClick={() => removeMovieFromMyList(movieId)}
                >
                    <FontAwesomeIcon icon={faXmark} />
                    <span> Mi Lista</span>
                </Button>
            }
        </div>
    )
}
