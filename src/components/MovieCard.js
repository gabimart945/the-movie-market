import {useContext, useState} from "react";
import {Rating} from "./Rating";
import '../styles/MovieCard.css'
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useUser} from "../hooks/useUser";
import {ThemeContext} from "../context/ThemeContext";

export const MovieCard = ({movie}) => {

    const [showFullSynopsis, setShowFullSynopsis] = useState(false);
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate()
    const {inMyList, addMovieToMyList, removeMovieFromMyList} = useUser()
    const synopsisMaxLength = 150;

    return (
        <div className='movie-card'>
            <div className='movie-card__inner'>
                <div className='inner__front'>
                    <img src={movie.cover} className='front__poster' alt={movie.title}/>
                </div>
                <div className='inner__back'>
                    <div className={'back__body--'+theme}>
                        <h3 className='body__title'>{movie.title}</h3>
                        <Rating className="body__rating" rating={movie.rating}/>
                        <p className='body__release'><b>Fecha: </b> {movie.release}</p>
                        <p className='body__genres'>
                            <b>Géneros: </b>
                            {movie.genres.map((genre, index)=>(
                                <span key={index}>{index<movie.genres.length-1 ? genre+',':genre}</span>
                            ))}
                        </p>
                        <hr className='body__hr'/>
                        <div className='body__synopsis-container'>
                            {movie.synopsis.length > synopsisMaxLength ?
                                <p className='body__synopsis'>
                                    {showFullSynopsis ? movie.synopsis : movie.synopsis.slice(0, synopsisMaxLength) + '...'}
                                    {showFullSynopsis ?
                                        <span onClick={() => setShowFullSynopsis(false)}>
                                        <b> Mostrar menos</b>
                                    </span> :
                                        <span onClick={() => setShowFullSynopsis(true)}>
                                        <b> Mostrar más</b>
                                    </span>
                                    }
                                </p> :
                                <p className='body__synopsis'>{movie.synopsis}</p>
                            }
                        </div>
                    </div>
                    <div className='inner__footer'>
                        <Button className="footer__button" onClick={()=> navigate('/movie/'+movie.id)}>+Info</Button>
                        {!inMyList(movie.id) ?
                            <Button
                                className="footer__button"
                                onClick={() => addMovieToMyList(movie.id)}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                                <span> Mi lista</span>
                            </Button> :
                            <Button
                                className="footer__button"
                                variant="danger"
                                onClick={() => removeMovieFromMyList(movie.id)}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                                <span> Mi Lista</span>
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}