import {Table} from 'react-bootstrap';
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import '../styles/RentTable.css'
import {useNavigate} from "react-router-dom";

export const RentTable = ({rents}) => {

    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate()

    const timestampToDate = (timestamp) => {
        const date = new Date(timestamp)
        return date.toLocaleDateString(navigator.language, {hour: '2-digit', minute:'2-digit'})
    }

    return (
        <Table striped bordered hover variant={theme}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Película</th>
                    <th>Fecha de alquiler</th>
                    <th>Disponible hasta </th>
                </tr>
            </thead>
            <tbody>
            {rents.map((movie, index) => (
                <tr
                    key={'ts-' + index}
                    className='rent__movie'
                    onClick={()=> navigate(`/movie/${movie.movieId}`)}
                >
                    <td>{index+1}</td>
                    <td >{movie.title}</td>
                    <td>{timestampToDate(movie.from)}</td>
                    <td>{timestampToDate(movie.to)}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}
