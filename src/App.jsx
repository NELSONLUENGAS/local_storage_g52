import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './views/Home';
import { PostsGallery } from './views/PostsGallery';
import { PostDetail } from './views/PostDetail';
import { FavoritesCart } from './views/FavoritesCart';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

function App() {
	return (
		<>
			<Nav />
			<main>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					></Route>
					<Route
						path="/posts"
						element={<PostsGallery />}
					>
						<Route
							path=":id"
							element={<PostDetail />}
						></Route>
					</Route>
					<Route
						path="/cart"
						element={<FavoritesCart />}
					></Route>
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
