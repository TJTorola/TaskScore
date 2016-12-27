import { todaysCutoff } from 'lib/today';
import { expireTasks } from 'actions/tasks';

export default store => {
	store.dispatch(expireTasks(todaysCutoff()));
}