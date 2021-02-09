import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from './contactsReducer';
import authReducer from './authorizationReduser';

const authPersist = {
    key: "auth",
    storage,
    whitelist: ["email", "idToken", "refreshToken", "isAuth", "localId"],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersist, authReducer),
    contacts: contactsReducer,
})

export default rootReducer
// "now < 1614981600000"