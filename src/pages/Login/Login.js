
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, signInWithGithub } = useAuth();

    return (
        <div className="my-4">
            <h1>LogIn or Register</h1>
            <div>
                <button onClick={signInWithGoogle} className="btn btn-warning my-3 text-white"><span><FontAwesomeIcon icon={faGoogle} /> Google SignIn</span></button>
                <br />
                <button onClick={signInWithGithub} className="btn btn-warning text-white">
                    <span><FontAwesomeIcon icon={faGithub} /> Github SignIn</span></button>
            </div>
        </div>
    );
};

export default Login;