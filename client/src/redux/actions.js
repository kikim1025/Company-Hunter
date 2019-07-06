import $ from 'axios';
import { GET_DATA, FAIL_DUP, FAIL } from '../constants/constants';

// retrieve data from server to redux store
export function getData() {
    return function(dispatch) {
        return (
            $.get('/api/company')
            .then((res) => {
                dispatch({ type: GET_DATA, payload: res.data.data });
            })
        );    
    };
};

// send request to create company data
export function createCompany() {
    return function(dispatch) {
        return (
            $.get('/api/company')
            .then((res) => {
                dispatch({ type: GET_DATA, payload: res.data.data });
            })
        );    
    };
};

// send appointments request to server, then relay success or duplicate fail response, with refreshed appointments data to store
export function sendAppointment(name, day, hour) {
    return function(dispatch) {
        return (
            $.post('/api/appointments', { name: name, day: day, hour: hour })
            .then((res) => {
                if (res.data.status === 200) {
                    dispatch({ type: GET_DATA, payload: res.data.data });
                } else if (res.data.status === 409){
                    dispatch({ type: FAIL_DUP, payload: res.data.data });
                } else {
                    dispatch({ type: FAIL });
                }
            })
        );    
    };
};