import React from 'react';
import { auth, provider } from '../firebase/firebase';
import { Button } from '@material-ui/core';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({user}) => {
                dispatch(login(
                    {
                        displayName: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL
                    }
                ))

            }).catch( error => alert(error.message))
    };
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://w7.pngwing.com/pngs/105/439/png-transparent-white-and-blue-message-icon-illustration-email-computer-icons-symbol-message-inbox-by-gmail-envelope-miscellaneous-blue-angle-thumbnail.png"
                alt="" />
                <Button variant="contained" color="primary" onClick={signIn}>
                    Login
                </Button>
            </div>
            
        </div>
    )
}

export default Login;
