const STATE_KEY = "taskScore";

export const load = () => {
	try {
		const serialState = localstorage.getItem(STATE_KEY);
		if (serialState) return JSON.parse(serialState);
	} catch (e) {}

	return {};
}

export const save = state => {
	try {
		const serialState = JSON.stringify(state);
		localstorage.setItem(STATE_KEY);
	} catch (e) {}
}