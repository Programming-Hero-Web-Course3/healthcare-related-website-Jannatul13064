import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState([]);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    };
    /// Github Sign In
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubAuthProvider)
    }

    const handleLogOut = () => {

        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.error(error);
        });
    };

    // ///Registration System
    // const handleEmailChange = e => {
    //     setEmail(e.target.value);
    // }

    // const handlePassword = e => {
    //     setPassword(e.target.value);
    // }
    // const handleRegistration = e => {
    //     console.log(email, password);
    //     return createUserWithEmailAndPassword(auth, email, password)

    // }

    //Observer user state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [auth]);


    return {
        user,
        handleLogOut,
        signInWithGoogle,
        signInWithGithub,


    }
}
export default useFirebase;