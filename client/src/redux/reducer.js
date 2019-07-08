import { GET_DATA, FAIL_DUP, FAIL_GONE, FAIL, TOGGLE_MODAL, ALERT_MODAL } from '../constants/constants';

const initState = {
    modal: false
};

function reducer(state = initState, action) {
    switch (action.type) {
        case GET_DATA:
            return Object.assign({}, state, {
                data: action.payload,
                modal: false,
                input: true,
                name: '',
                performance: 0,
                desc: '',
                contacts: [],
                alert: ''
            });
        case FAIL_DUP:
            return Object.assign({}, state, { 
                data: action.payload,
                modal: false,
                alert: 'Company data with same name was already created by another user. Data refreshed.'
            });
        case FAIL_GONE:
            return Object.assign({}, state, { 
                data: action.payload,
                modal: false,
                alert: 'The company data was deleted by another user. Data refreshed.'
            });
        case FAIL:
            return Object.assign({}, state, { 
                modal: false,
                alert: 'Unkown Server ERROR'
            });
        case TOGGLE_MODAL:
            return Object.assign({}, state, { 
                modal: action.modal,
                input: action.input,
                name: action.name,
                status: action.status,
                performance: action.performance,
                desc: action.desc,
                contacts: action.contacts,
                alert: ''
            });
        case ALERT_MODAL:
            return Object.assign({}, state, { 
                modal: false,
                alert: action.alert
            });
        default: 
            return state;
    };
};

export default reducer;