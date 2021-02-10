import { singUp, singIn, singOut, setLoading, setError } from "../actions/authorizationActions";

const initialState = {
    email: '',
    idToken: '',
    refreshToken: '',
    error: '',
    localId: '',
    isLoading: false,
    isAuth: false,
}


const authReducer = (state = { ...initialState }, { type, payload }) => {
    switch (type) {
        case singUp.type:
            return {
                ...state, email: payload.email,
                idToken: payload.idToken,
                refreshToken: payload.refreshToken,
                isAuth: true,
                localId: payload.localId,
            };
        case singIn.type:
            return {
                ...state,
                email: payload.email,
                idToken: payload.idToken,
                refreshToken: payload.refreshToken,
                isAuth: true,
                localId: payload.localId,
            };
        case singOut.type:
            return { ...initialState };
        case setLoading.type:
            return { ...state, isLoading: !state.isLoading };
        case setError.type:
            return { ...state, error: payload };

        default:
            return state;
    }
}

export default authReducer 