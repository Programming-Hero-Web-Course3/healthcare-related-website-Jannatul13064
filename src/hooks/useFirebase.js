import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState([]);

    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error.message);
            })

    };
    /// Github Sign In
    const signInWithGithub = () => {
        signInWithPopup(auth, githubAuthProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error.message);
            })

    }
    const handleLogOut = () => {

        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.error(error);
        });
    };

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
        signInWithGithub
    }
}
export default useFirebase;