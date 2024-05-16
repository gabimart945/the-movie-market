import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {MovieCard} from "./MovieCard";


const moviesPerRow = 5;

const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

export const MovieMatrix = ({movies, className}) => {

    const chunks = chunkArray(movies, moviesPerRow)

    return (
        <div className={className}>
            <Container>
                {chunks.map((chunk, row_index) => {
                    return (
                        <Row key={row_index}>
                            {chunk.map((movie, card_index) => (
                                    <Col key={moviesPerRow*row_index + card_index}>
                                        <MovieCard key={moviesPerRow*row_index + card_index} movie={movie}/>
                                    </Col>
                                )
                            )}
                        </Row>
                    )
                })}
            </Container>
        </div>
    )
}