import { connect } from 'react-redux';

import View from './view';
import { finishTask } from 'actions/tasks';

const mapStateToProps = state => ({
	tasks: state.tasks.current
});

const mapDispatchToProps = dispatch => ({
	finishTask: id => () => dispatch(finishTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
