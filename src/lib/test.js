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

// TODO: Write helpers to extract spy info in a more flexable way.
//   EX: extractDispatchTypes() => ['DECREMENT_SCORE', 'ADD_TASK', ...]
