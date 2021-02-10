import axios from "axios";
import { setLoading, setError, singUp, singIn, alertActionAuth } from "../actions/authorizationActions";


export const singUpOperation = (user) => async (dispatch) => {
    dispatch(setLoading())
    axios.post(
        process.env.REACT_APP_SINGUP_URL, { ...user, returnSecureToken: true })
        .then(response => dispatch(singUp(response.data)))
        .catch((error) => dispatch(setError(error)))
        .finally(dispatch(setLoading()))
};

export const singInOperation = (user) => async (dispatch) => {
    dispatch(setLoading())
    axios.post(
        process.env.REACT_APP_SINGIN_URL, { ...user, returnSecureToken: true })
        .then(response => dispatch(singIn(response.data)))
        .catch((error) => {
            if (error.message === 'INVALID_PASSWORD') { dispatch(alertActionAuth(error.message)); }
            dispatch(setError(error));
        })
        .finally(dispatch(setLoading()))
};





