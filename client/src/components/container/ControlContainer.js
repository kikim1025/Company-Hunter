import { connect } from 'react-redux';
import Control from '../presentational/Control';
import { toggleModal } from '../../redux/actions';

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (modal, input, name, status, performance, desc, contacts) => dispatch(toggleModal(modal, input, name, status, performance, desc, contacts)),
        //createCompany: () => dispatch(createCompany()),
        //updateCompany: () => dispatch(createCompany()),
        //deleteCompany: () => dispatch(createCompany())
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Control);