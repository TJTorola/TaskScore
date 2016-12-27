import configureStore from './configure';

const STATE_KEY = "taskScore";

const load = () => {
	try {
		const serialState = localStorage.getItem(STATE_KEY);
		if (serialState) return JSON.parse(serialState);
	} catch (e) {}

	return {};
};

const save = state => {
	try {
		const serialState = JSON.stringify(state);
		localStorage.setItem(STATE_KEY, serialState);
	} catch (e) {}
};

export default () => {
	const store = configureStore(load()),
	      { getState } = store;

	const storeState = () => {
		save(getState());
	}
	store.subscribe(storeState);

	return store;
};
