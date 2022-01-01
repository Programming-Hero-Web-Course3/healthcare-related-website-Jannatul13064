
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    // console.log('Came From', location.state?.from);

    const { signInWithGoogle, signInWithGithub } = useAuth();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className="my-4">
            <h1>LogIn or Register</h1>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-warning my-3 text-white"><span><FontAwesomeIcon icon={faGoogle} /> Google SignIn</span></button>
                <br />
                <button onClick={handleGithubSignIn} className="btn btn-warning text-white">
                    <span><FontAwesomeIcon icon={faGithub} /> Github SignIn</span></button>
            </div>
        </div>
    );
};

export default Login;