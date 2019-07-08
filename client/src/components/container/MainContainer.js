import { connect } from 'react-redux';
import Main from '../presentational/Main';
import { getData, toggleModal } from '../../redux/actions';

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData()),
        toggleModal: (modal, name, status, performance, desc, contacts, input) => dispatch(toggleModal(modal, name, status, performance, desc, contacts, input))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Main);