import axios from "axios";
import { REACT_APP_SINGUP_URL, REACT_APP_SINGIN_URL } from '../dataBackEnd'
import { setLoading, setError, singUp, singIn, singOut } from "../actions/authorizationActions";


export const singUpOperation = (user) => async (dispatch) => {
    dispatch(setLoading())
    axios.post(
        REACT_APP_SINGUP_URL, { ...user, returnSecureToken: true })
        .then(response => dispatch(singUp(response.data)))
        .catch((error) => dispatch(setError(error)))
        .finally(dispatch(setLoading()))
};

export const singInOperation = (user) => async (dispatch) => {
    dispatch(setLoading())
    axios.post(
        REACT_APP_SINGIN_URL, { ...user, returnSecureToken: true })
        .then(response => dispatch(singIn(response.data)))
        .catch((error) => {
            dispatch(setError(error));
            dispatch(singOut());
        })
        .finally(dispatch(setLoading()))
};





