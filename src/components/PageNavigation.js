import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import '../styles/PageNavigation.css'

const maxPages = 10;

export const PageNavigation = ({onChange}) => {

    const [page, setPage] = useState(1)

    const handlePrev = () => {
        if (page>1){
            onChange(page-1);
            setPage(page-1);
        }
    }

    const handleNext = () => {
        if (page < maxPages){
            onChange(page+1);
            setPage(page+1);
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col key={1}>
                        <FontAwesomeIcon
                            className='pagenav__icon'
                            icon={faArrowLeft}
                            onClick={()=> handlePrev()}
                        />
                    </Col>
                    <Col key={2}>{page}</Col>
                    <Col key={3}>
                        <FontAwesomeIcon
                            className='pagenav__icon'
                            icon={faArrowRight}
                            onClick={()=> handleNext()}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )

}