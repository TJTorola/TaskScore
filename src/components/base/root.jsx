import React from 'react';
import { Provider } from 'react-redux';

import App from './app';
import configureStore from 'store/configure';

export default () => (
	<Provider store={ configureStore() }>
		<App />
	</Provider>
);
