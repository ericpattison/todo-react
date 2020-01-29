import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import { Link } from '../components';
import { IState } from '../types';

const mapStateToProps = (state: any, ownProps: any): any=> ({
    active: ownProps.filter === state.filter,
});

const mapDispatchToProps = (dispatch: any, ownProps: any): any => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);