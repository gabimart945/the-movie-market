import {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {UserList} from "../components/UserList";
import '../styles/User.css'
import {Container, Col, Row} from "react-bootstrap";
import {RentTable} from "../components/RentTable";

export const User = () => {

    const {user} = useContext(UserContext)

    return (
        <div className='user-view'>
            <Row className='user-view__row'>
                <Col key={1} xs={4}>
                    <div className='user-view__rents'>
                        <h3 className='rents__title'>Mis alquileres</h3>
                        <RentTable rents={user.rented}/>
                    </div>
                </Col>
                <Col key={2} xs={8}>
                    <div className='user-view__acquirments'>
                        <h3 className='acquirments__title'>Mis compras</h3>
                        <UserList movieIds={user.acquired}></UserList>
                    </div>
                    <div className='user-view__my-list'>
                        <h3 className='my-list__title'>Mi lista</h3>
                        <UserList movieIds={user.myList}></UserList>
                    </div>
                </Col>
            </Row>
        </div>
    )
}