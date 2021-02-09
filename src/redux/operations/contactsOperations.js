import axios from "axios";
import { addContactActionCreator, deleteContactActionCreator, setLoading, setError, getContacts } from '../actions/contactsActions';

export const addNewContactOperation = (contact) => (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    dispatch(setLoading())
    axios.post(
        `${process.env.REACT_APP_BASE_URL}/contacts.json?auth=${idToken}`,
        contact
    )
        .then(response => dispatch(addContactActionCreator({ ...contact, id: response.data.name })))
        .catch(error => dispatch(setError(error)))
        .finally(dispatch(setLoading()))
}

export const getContactsOperation = () => (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    dispatch(setLoading());
    axios.get(
        `${process.env.REACT_APP_BASE_URL}/contacts.json?auth=${idToken}`
    )
        .then(response => {
            dispatch(getContacts(Object.keys(response.data).map((key) => ({
                ...response.data[key],
                id: key,
            }))))
        })
        .catch(error => dispatch(setError(error)))
        .finally(dispatch(setLoading()))
}

export const deleteContactOperation = (id) => (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    dispatch(setLoading());
    axios.delete(`${process.env.REACT_APP_BASE_URL}/contacts/${id}.json?auth=${idToken}`)
        .then(response => dispatch(deleteContactActionCreator(id)))
        .catch(error => dispatch(setError(error)))
        .finally(dispatch(setLoading()))

}
