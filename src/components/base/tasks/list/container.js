import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
	tasks: state.tasks.current
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
