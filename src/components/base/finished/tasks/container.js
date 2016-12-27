import { connect } from 'react-redux';

import View from './view';
import { unfinishTask } from 'actions/tasks';

const mapStateToProps = state => ({
	tasks: state.tasks.finished
});

const mapDispatchToProps = dispatch => ({
	unfinishTask: id => () => dispatch(unfinishTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
