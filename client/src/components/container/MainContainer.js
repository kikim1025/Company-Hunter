import { connect } from 'react-redux';
import Main from '../presentational/Main';
import { getData } from '../../redux/actions';

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Main);