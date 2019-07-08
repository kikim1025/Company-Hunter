import { connect } from 'react-redux';
import Modal from '../presentational/Modal';
import { toggleModal, sendData, deleteCompany } from '../../redux/actions';

const mapStateToProps = (state) => {
    return {
        data: state.data,
        modal: state.modal,
        input: state.input,
        name: state.name,
        status: state.status,
        performance: state.performance,
        desc: state.desc,
        contacts: state.contacts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (modal, input, name, status, performance, desc, contacts) => dispatch(toggleModal(modal, input, name, status, performance, desc, contacts)),
        sendData: (name, status, performance, desc, email1, email2, email3, data) => dispatch(sendData(name, status, performance, desc, email1, email2, email3, data)),
        deleteCompany: (name) => dispatch(deleteCompany(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Modal);