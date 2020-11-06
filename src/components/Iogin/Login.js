import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';

firebase.initializeApp(firebaseConfig);



const Login = () => {
    return (
        <div>
            <h1>This is Login</h1>
        </div>
    );
};

export default Login;