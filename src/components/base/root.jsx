import React from 'react';
import { Provider } from 'react-redux';

import App from './app';
import configureStore from 'store/localStorage';
import initialize from 'store/initialize';

const store = configureStore();
initialize(store);

export default () => (
	<Provider store={ store }>
		<App />
	</Provider>
);
