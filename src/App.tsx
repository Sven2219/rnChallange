import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import store from './redux/store';
import Router from './navigation/Router';

export const client = new QueryClient();

function App() {
	return (
		<Provider store={store}>
			<QueryClientProvider client={client}>
				<Router />
			</QueryClientProvider>
		</Provider>
	);
}

export default App;
