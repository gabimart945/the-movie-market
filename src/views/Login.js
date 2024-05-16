import {useState, useContext} from 'react'
import {Form, Button} from 'react-bootstrap'
import '../styles/Login.css'
import {ThemeContext} from "../context/ThemeContext";
import {AuthContext} from "../context/AuthContext";
import {useAuthentication} from "../hooks/useAuthentication";
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
export const Login = () => {

    const {theme} = useContext(ThemeContext)
    const {sessionId} = useContext(AuthContext)
    const navigate = useNavigate()
    const {logIn} = useAuthentication()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)


    useEffect(()=>{
        if(sessionId!==null){
            navigate('/home')
        }
        else{
            navigate('/login')
        }
    },[sessionId])


    const handleSubmit = () => {
        const error = logIn(name, password)
        setError(error)
    }

    return (
        <div className={"login-view--"+theme}>
            <h1 className="login-view__title">Login</h1>
            <Form className="login-view__form">

                <Form.Label className="form__label" htmlFor="inputName">Name</Form.Label>
                <Form.Control
                    className="form__input"
                    type="text"
                    id="inputName"
                    aria-describedby="passwordHelpBlock"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                {error!==null && error.type==='username'? <p className='form__error'>{'* '+error.msg}</p>:''}
                <Form.Label className="form__label" htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                    className="form__input"
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                {error!==null && error.type==='password'? <p className='form__error'>{'* '+error.msg}</p>:''}

                <Button
                    className="form__button"
                    onClick={()=> handleSubmit(name, password)}
                    disabled={name === '' || password.length < 8}
                >
                    Log In
                </Button>
            </Form>
        </div>
    )
}