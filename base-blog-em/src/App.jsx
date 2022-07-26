import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';
import { Posts } from './components/Posts';

const queryClient = new QueryClient();

function App() {
	return (
		// provide React Query client to App
		<QueryClientProvider client={queryClient}>
			<div className='App'>
				<h1>Blog Posts</h1>
				<Posts />
			</div>
		</QueryClientProvider>
	);
}

export default App;
