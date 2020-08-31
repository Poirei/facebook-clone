/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
                    alt="fb_logo"
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt="fb_text"
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default login;
