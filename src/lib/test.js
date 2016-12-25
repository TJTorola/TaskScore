import { spy } from 'sinon';

export const mockStore = mockState => ({
	getState: () => mockState,
	dispatch: spy(),
	subscribe: spy(),
	replaceReducer: spy()
});

export const middlewareSpies = (mockState, middleware) => {
	const store = mockStore(mockState),
	      next  = spy();

	return {
		middleware: middleware(store)(next),
		store, next
	};
};
