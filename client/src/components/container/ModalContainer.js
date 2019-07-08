import { connect } from 'react-redux';
import Modal from '../presentational/Modal';
import { toggleModal, deleteCompany } from '../../redux/actions';

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        input: state.input,
        name: state.name,
        status: state.status,
        performance: state.performance,
        desc: state.desc,
        contacts: state.contacts,
        alert: state.alert
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (modal, input, name, status, performance, desc, contacts) => dispatch(toggleModal(modal, input, name, status, performance, desc, contacts)),
        //createCompany: () => dispatch(createCompany()),
        //updateCompany: () => dispatch(createCompany()),
        deleteCompany: (name) => dispatch(deleteCompany(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Modal);