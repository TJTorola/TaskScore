import { connect } from 'react-redux';

import View from './view';
import { finishTask, removeTask } from 'actions/tasks';

const mapStateToProps = state => ({
	tasks: state.tasks.current
});

const mapDispatchToProps = dispatch => ({
	finishTask: id => () => dispatch(finishTask(id)),
	removeTask: id => () => dispatch(removeTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
