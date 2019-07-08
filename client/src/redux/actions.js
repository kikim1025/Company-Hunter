import $ from 'axios';
import { GET_DATA, FAIL_DUP, FAIL_GONE, FAIL, TOGGLE_MODAL, ALERT_MODAL } from '../constants/constants';

// Helper function to remove all empty String elements from an array
const removeEmpty = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) {
            newArr.push(arr[i]);
        };
    };
    return newArr;
};

// Helper function to check if all elements of array are unique emails
// Empty array is true
const areUniqueEmails = (arr) => {
    let checked = [];
    for (let i = 0; i < arr.length; i++) {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(arr[i]) || checked.includes(arr[i])) {
            return false;
        };
        checked.push(arr[i])
    };
    return true;
};

// Helper function to check if the data to be sent is new or updating previous
const checkDuplicate = (name, arr) => {
    for (let i = 0; i< arr.length; i++) {
        if (arr[i].name === name) {
            return true;
        };
    };
    return false;
};


/** ----------Actions---------- **/

// Retrieve data from server to redux store
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

// Send request to create or update company data
// Check if data to be sent is valid (some other conditions were already checked through UI settings of input elements)
export const sendData = (name, status, performance, desc, email1, email2, email3, data) => {
    const temp = [email1, email2, email3];
    const contacts = removeEmpty(temp);
    if (name.length > 0 && performance >= 0 && performance <= 10 && areUniqueEmails(contacts)) {
        return (dispatch) => {
            if (!checkDuplicate(name, data)) {
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
            } else {
                return (
                    $.put('/api/company', { name, status, performance, desc, contacts  })
                    .then((res) => {
                        if (res.data.status === 200) {
                            dispatch({ type: GET_DATA, payload: res.data.data });
                        } else if (res.data.status === 404) {
                            dispatch({ type: FAIL_GONE, payload: res.data.data });
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
    } else {
        return {
            type: ALERT_MODAL,
            alert: 'Name, Status, Performance are required, performance should be between 0 and 10 inclusively, and emails should be unique and in correct format.'
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