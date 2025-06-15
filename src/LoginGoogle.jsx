import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const responseGoogle = (response) => {
    console.log(11111, response);
}
const LoginGoogle = () => {
    return (
        <GoogleOAuthProvider
            clientId="908343564983-1nijnjocu5gq4etjck79c5iqmv08gt0s.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}

export default LoginGoogle;
