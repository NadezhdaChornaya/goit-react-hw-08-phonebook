import axios from "axios";
import { setLoading, setError, singUp, singIn } from "../actions/authorizationActions";


export const singUpOperation = (user) => async (dispatch) => {
    dispatch(setLoading())
    axios.post(
        process.env.REACT_APP_SINGUP_URL, { ...user, returnSecureToken: true })
        .then(response => dispatch(singUp(response.data)))
        .catch(error => dispatch(setError(error)))
        .finally(dispatch(setLoading()))
};

export const singInOperation = (user) => async (dispatch) => {
    dispatch(setLoading())
    axios.post(
        process.env.REACT_APP_SINGIN_URL, { ...user, returnSecureToken: true })
        .then(response => dispatch(singIn(response.data)))
        .catch(error => dispatch(setError(error)))
        .finally(dispatch(setLoading()))
};





