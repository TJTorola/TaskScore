import { connect } from 'react-redux';

import View from './view';
import { finishTask } from 'actions/tasks';

const mapStateToProps = state => ({
	tasks: state.tasks.finished
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
