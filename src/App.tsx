import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import store from './redux/store';
import Router from './navigation/Router';

export const client = new QueryClient();

function App() {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<QueryClientProvider client={client}>
					<Router />
				</QueryClientProvider>
			</Provider>
		</SafeAreaProvider>
	);
}

export default App;
