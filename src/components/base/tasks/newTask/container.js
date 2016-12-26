import { connect } from 'react-redux';

import View from './view';
import { buildTask } from 'actions/tasks';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({ 
	buildTask: description => dispatch(buildTask(description))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
