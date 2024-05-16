import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {UserContext} from "../context/UserContext";
import bcrypt from "bcryptjs";


//Add some fake users here
const userList = [
    {
        username: 'gabi1',
        passwordHash: '$2a$10$CwTycUXWue0Thq9StjUM0un2fk7f659845GwyUHPtOWPpYtSs9Yjy',
        userApiMockup: {
            user: {
                name: 'Gabriel Martinez',
                myList: [],
                rented: [],
                acquired: []
            },
            authToken: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTA0YjQ3MWFjODg2ZmFhODM3MTU2Nzc3MzdkYzViMSIsInN1YiI6IjY2NDNiNGYxMDE2MzVlZWQ3M2MxZDczNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8uN-wpSsKlUaoZdlbHKfyxATPa2kHwjHYBAOkUqLMeM'
        }

    }
]

const generateHash = (password)  => {
    const salt = '$2a$10$CwTycUXWue0Thq9StjUM0u';
    const hash = bcrypt.hashSync(password, salt)
    //console.log('Password: '+password+', hash: '+hash);
    return hash;
}

export const useAuthentication = () => {

    const {setAuthToken} = useContext(AuthContext);
    const {setUser} = useContext(UserContext);

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
                setUser(userMatch.userApiMockup.user)
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
        setUser(null);
        setAuthToken(null);
    }

    return {
        logIn,
        logOut
    }

}

