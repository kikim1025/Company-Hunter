import { connect } from 'react-redux';
import Alert from '../presentational/Alert';

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    };
};

export default connect(mapStateToProps, null) (Alert);