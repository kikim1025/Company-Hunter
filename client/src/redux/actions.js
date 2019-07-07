import $ from 'axios';
import { GET_DATA, FAIL_DUP, FAIL_GONE, FAIL } from '../constants/constants';

// retrieve data from server to redux store
export function getData() {
    return function(dispatch) {
        return (
            $.get('/api/company')
            .then((res) => {
                dispatch({ type: GET_DATA, payload: res.data.data });
            })
            .catch(function (error) {
                console.log(error);
            })
        );    
    };
};

// send request to create company data
export function createCompany(name, status, desc, contacts, performance) {
    return function(dispatch) {
        return (
            $.post('/api/company', { name, status, desc, contacts, performance  })
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
            })
        );    
    };
};