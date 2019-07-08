import $ from 'axios';
import { GET_DATA, FAIL_DUP, FAIL_GONE, FAIL, TOGGLE_MODAL } from '../constants/constants';


// Helper function to check if input array is made of emails
const areEmails = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        
    };
};


// retrieve data from server to redux store
export const getData = () => {
    return (dispatch) => {
        return (
            $.get('/api/company')
            .then((res) => {
                dispatch({ type: GET_DATA, payload: res.data.data });
            })
            .catch(function (error) {
                console.log(error);
                dispatch({ type: FAIL });
            })
        );    
    };
};

// Send request to create company data
// Check if data to be sent is valid (some other conditions were already checked through UI settings of input elements)
export const createCompany = (name, status, performance, desc, contacts) => {
    if (name.length >= 0 && performance >= 0 && performance <= 10)
        return (dispatch) => {
            return (
                $.post('/api/company', { name, status, performance, desc, contacts  })
                .then((res) => {
                    if (res.data.status === 200) {
                        dispatch({ type: GET_DATA, payload: res.data.data });
                    } else if (res.data.status === 409) {
                        dispatch({ type: FAIL_DUP, payload: res.data.data });
                    } else {
                        dispatch({ type: FAIL });
                    };
                })
                .catch(function (error) {
                    console.log(error); 
                    dispatch({ type: FAIL });
                })
            );    
        };
    else {
        return {

        };
    };
};

// send request to delete company data
export const deleteCompany = (name) => {
    return (dispatch) => {
        return (
            $.delete('/api/company', { data: { name } })
            .then((res) => {
                if (res.data.status === 200) {
                    dispatch({ type: GET_DATA, payload: res.data.data });
                } else {
                    dispatch({ type: FAIL });
                };
            })
            .catch(function (error) {
                console.log(error);
                dispatch({ type: FAIL });
            })
        );    
    };
};


// Toggle modal and sends to redux store appropriate data
export const toggleModal = (modal, input, name, status, performance, desc, contacts) => {
    return {
        type: TOGGLE_MODAL,
        modal,
        input,
        name,
        status,
        performance,
        desc,
        contacts
    };
};