import axios from "axios";
import { REACT_APP_BASE_URL } from '../dataBackEnd'
import { addContactActionCreator, deleteContactActionCreator, setLoading, setError } from '../actions/contactsActions';

export const addNewContactOperation = (contact) => (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    const localId = getState().auth.localId;
    dispatch(setLoading())
    axios.post(
        `${REACT_APP_BASE_URL}/contacts/${localId}.json?auth=${idToken}`,
        contact
    )
        .then(response => dispatch(addContactActionCreator({ ...contact, id: response.data.name })))
        .catch(error => dispatch(setError(error)))
        .finally(dispatch(setLoading()))
}



export const deleteContactOperation = (id) => (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    const localId = getState().auth.localId;
    dispatch(setLoading());
    axios.delete(`${REACT_APP_BASE_URL}/contacts/${localId}/${id}.json?auth=${idToken}`)
        .then(response => dispatch(deleteContactActionCreator(id)))
        .catch(error => dispatch(setError(error)))
        .finally(dispatch(setLoading()))

}

// ======== rules for FireBase user folder =================
// {
//     "rules": {
//      
//           "contacts": {
//             "$uid": {
//               ".read": "$uid === auth.uid",
//                 ".write": "$uid === auth.uid"
//             }
//           }
//     }
//   }
// ================================================================
// rules for OfflineAudioCompletionEvent
// "users": {
//   "$user_id": {
//     ".write": "auth !== null && auth.user_id === 'yuY4zi24JadojY4Y6JwlKHUwnof2'"
//   }
// }

// {
//     "rules": {
//         ".read": "now < 1614981600000",  // 2021-3-6
//             ".write": "auth !=null",  // 2021-3-6
//   }
// }


















// export const getContactsOperation = () => (dispatch, getState) => {
//     const idToken = getState().auth.idToken;
//     dispatch(setLoading());
//     axios.get(
//         `${process.env.REACT_APP_BASE_URL}/contacts.json?auth=${idToken}`
//     )
//         .then(response => {
//             dispatch(getContacts(Object.keys(response.data).map((key) => ({
//                 ...response.data[key],
//                 id: key,
//             }))))
//         })
//         .catch(error => dispatch(setError(error)))
//         .finally(dispatch(setLoading()))
// }