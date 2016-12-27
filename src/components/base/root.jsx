import React from 'react';
import { Provider } from 'react-redux';

import App from './app';
import configureStore from 'store/localStorage';

export default () => (
	<Provider store={ configureStore() }>
		<App />
	</Provider>
);
