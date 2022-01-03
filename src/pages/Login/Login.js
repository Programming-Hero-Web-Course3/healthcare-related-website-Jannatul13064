import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, getAuth } from 'firebase/auth';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    // console.log('Came From', location.state?.from);

    const { signInWithGoogle, signInWithGithub } = useAuth();
    const auth = getAuth();
    //// We use here handleGoogleSignIn & handleGithubSignIn cause we want to set our user required Destination or Path.///
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


    //Toggle Log In
    const toggleLogIn = e => {
        setIsLogged(e.target.checked);
    }
    ///Registration System
    const handleNameState = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleRegistrationState = e => {
        e.preventDefault();
        if (password.length < 8) {
            setError('Password must contain at least 8 characters')
            return
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Password Must Contain  one special case letter');
        }
        else {
            setError('');
        }
        isLogged ? processLogIn(email, password) : createUser(email, password)

    }

    ///Register New User
    const processLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');

            })
            .catch((error) => {
                setError(error.message);
            })

    }
    //////Create New User/////////
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                verifyEmail();
                setUserName();
            })
            .catch((error) => {
                setError(error.message);
            })
    }
    ///Set user Name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })

    }
    ////Email Verification System//////
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    ////Reset Password
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result);
            })
    }

    return (
        name,
        <div className="my-4">
            <h1 className='text-primary'>Submit for {isLogged ? 'LogIn Info' : 'Register Info'}</h1>
            <div className='container w-80'>
                <form onSubmit={handleRegistrationState}>
                    {!isLogged && <div className="form-group">
                        <label>Name of User</label>
                        <input onBlur={handleNameState} type="text" className="form-control" placeholder="Enter your Name" />
                    </div>}
                    <div className="form-group">
                        <label>Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" placeholder="Enter email" required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" placeholder="Enter password" required />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label" htmlFor="exampleCheck1"><span><input
                            onChange={toggleLogIn} type="checkbox" className="form-check-input" id="exampleCheck1" /></span>Already Registered?</label>


                    </div>
                    <div className='text-danger'>{error}</div>
                    <button type="submit" className="btn btn-primary btn-block mt-2">{isLogged ? 'LogIn' : 'Register'}</button>
                    <button onClick={resetPassword} className="btn btn-danger btn-block mx-2 mt-2"> Reset Password</button>
                </form>

            </div>
            <br /><br />
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