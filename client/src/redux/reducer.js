import { GET_DATA, FAIL_DUP, FAIL_GONE, FAIL } from '../constants/constants';

const initState = {};

function reducer(state = initState, action) {
    switch (action.type) {
        case GET_DATA:
            return Object.assign({}, state, {
                data: action.payload,
                alert: ''
            });
        case FAIL_DUP:
            return Object.assign({}, state, { 
                data: action.payload,
                alert: 'Company data with same name was already created by another user.'
            });
        case FAIL_GONE:
            return Object.assign({}, state, { 
                data: action.payload,
                alert: 'The company data was deleted by another user.'
            });
        case FAIL:
            return Object.assign({}, state, { 
                alert: 'Unkown Server ERROR'
            });
        default: 
            return state;
    };
};

export default reducer;