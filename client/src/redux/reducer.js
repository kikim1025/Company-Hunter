import { GET_DATA, FAIL_DUP, FAIL_GONE, FAIL, TOGGLE_MODAL, TOGGLE_MODAL_INPUT } from '../constants/constants';

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
                contacts: []
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
        case TOGGLE_MODAL:
            return Object.assign({}, state, { 
                modal: action.modal,
                input: action.input,
                name: action.name,
                status: action.status,
                performance: action.performance,
                desc: action.desc,
                contacts: action.contacts
            });
        default: 
            return state;
    };
};

export default reducer;