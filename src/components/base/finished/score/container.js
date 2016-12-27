import { connect } from 'react-redux';

import View from './view';
import { finishTask } from 'actions/tasks';

const mapStateToProps = state => ({
	score: state.tasks.score
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
