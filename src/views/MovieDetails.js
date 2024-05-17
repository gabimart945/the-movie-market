import '../styles/MovieDetails.css'
import {useParams} from "react-router";
import {useMovieDetails} from '../hooks/movies/useMovieDetails'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {Rating} from "../components/Rating";
import {CastList} from "../components/CastList";
import {MovieActions} from "../components/MovieActions";

export const MovieDetails = () => {
    const {movieId} = useParams()
    const {details} = useMovieDetails(movieId)

    return (
        <div className='details-view'>
            {details !== null ?
                <div>
                    <Container className='details-view__info'>
                        <Row>
                            <Col xs={4}>
                                <img src={details.cover} className="info__cover" alt={details.title}/>
                            </Col>
                            <Col xs={8}>
                                <h1>{details.title}</h1>
                                <Rating className="info__rating" rating={details.rating}></Rating>
                                <p className='info__genres'>
                                    <b>Géneros: </b>
                                    {details.genres.map((genre, index) =>
                                        index < details.genres.length-1 ?
                                            <span>{genre+', '}</span> : <span>{genre}</span>
                                    )}
                                </p>
                                <p className='info__release'><b>Estreno: </b>{details.release}</p>
                                <p className='info__runtime'>
                                    <b>Duración: </b>
                                    {Math.trunc(details.runtime/60) + 'h ' + details.runtime%60 + 'm'}
                                </p>
                                <p className='info__director'><b>Director: </b>{details.director}</p>

                                <h5>Sinopsis</h5>
                                <p>{details.synopsis}</p>
                                <MovieActions
                                    title={details.title}
                                    movieId={details.id}
                                    videoId={details.video !== undefined ? details.video.key : 'dQw4w9WgXcQ'}
                                />
                            </Col>
                        </Row>
                    </Container>
                <Container className='details-view__cast'>
                    <h5 className='cast__title'>Reparto</h5>
                    <CastList cast={details.cast}></CastList>
                </Container>
                </div> : ''}
        </div>
    )
}