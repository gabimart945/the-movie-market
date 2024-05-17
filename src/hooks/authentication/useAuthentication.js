import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {UserContext} from "../../context/UserContext";
import bcrypt from "bcryptjs";

//TODO: Change this hook and call authentication service

//Add some fake users here
const userList = [
    {
        username: 'test',
        passwordHash: '$2a$10$CwTycUXWue0Thq9StjUM0ufAwiHylND31x4P/qHYAr.lOt2Y1w7p2',
        userApiMockup: {
            user: {
                id: 'test',
                name: 'Test User',
                myList: [823464, 653346, 693134, 1111873, 967847],
                rented: [
                    {
                        "movieId": 1011985,
                        "title": "Kung Fu Panda 4",
                        "from": 1715925625731,
                        "to": 1716184825731
                    },
                    {
                        "movieId": 475557,
                        "title": "Joker",
                        "from": 1715925649865,
                        "to": 1716184849865
                    },
                    {
                        "movieId": 155,
                        "title": "El caballero oscuro",
                        "from": 1715925660636,
                        "to": 1716184860636
                    }
                ],
                acquired: [934632, 140607]
            },
            authToken: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTA0YjQ3MWFjODg2ZmFhODM3MTU2Nzc3MzdkYzViMSIsInN1YiI6IjY2NDNiNGYxMDE2MzVlZWQ3M2MxZDczNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8uN-wpSsKlUaoZdlbHKfyxATPa2kHwjHYBAOkUqLMeM'
        }

    }
]

const generateHash = (password)  => {
    const salt = '$2a$10$CwTycUXWue0Thq9StjUM0u';
    const hash = bcrypt.hashSync(password, salt)
    return hash;
}

export const useAuthentication = () => {

    const {setAuthToken} = useContext(AuthContext);
    const {user, setUser} = useContext(UserContext);

    const logIn = (username, password) => {
        let error = null;
        const hash = generateHash(password);

        // Fake API call
        //Filter userList by name and check password
        const userMatch = userList.find((u) => u.username === username);
        if (userMatch === undefined){
            error = {
                type: 'username',
                msg: 'Username not found'
            }
        }
        else{
            if (userMatch.passwordHash === hash){
                // Testing purpose, use local storage if available
                if(user===null || user.id !== userMatch.userApiMockup.user.id){
                    setUser(userMatch.userApiMockup.user)
                }
                setAuthToken(userMatch.userApiMockup.authToken)
            }
            else{
                error = {
                    type: 'password',
                    msg: 'Incorrect password'
                }
            }
        }

        return error;

    }

    const logOut = () => {
        setAuthToken(null);
    }

    return {
        logIn,
        logOut
    }

}

