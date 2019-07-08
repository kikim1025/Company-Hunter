import { connect } from 'react-redux';
import Control from '../presentational/Control';
import { toggleModal } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (modal, input, name, status, performance, desc, contacts) => dispatch(toggleModal(modal, input, name, status, performance, desc, contacts)),
    };
};

export default connect(null, mapDispatchToProps) (Control);