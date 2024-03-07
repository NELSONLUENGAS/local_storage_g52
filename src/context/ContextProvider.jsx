import { createContext, useEffect, useState } from 'react';

export const PostsProvider = createContext();

export const ContextProvider = ({ children }) => {
	const cartStorage = JSON.parse(localStorage.getItem('cart'));
	const [posts, setPosts] = useState([]);
	const [cart, setCart] = useState(cartStorage?.length ? cartStorage : []);

	const FetchPosts = async () => {
		const postsJson = await fetch('/posts.json');

		const { posts } = await postsJson.json();
		setPosts(posts);
	};

	const doLike = (id) => {
		const postsUpdated = posts.map((post) =>
			post.id == id ? { ...post, likes: post.likes + 1 } : post
		);
		setPosts(postsUpdated);

		const itemsInCart = postsUpdated.filter((posts) => posts.likes > 0);

		setCart(itemsInCart);
		localStorage.setItem('cart', JSON.stringify(itemsInCart));
	};

	useEffect(() => {
		FetchPosts();
	}, []);

	useEffect(() => {
		const cartStorage = JSON.parse(localStorage.getItem('cart'));

		const itemsInCart = posts.filter((posts) => posts.likes > 0);

		setCart(cartStorage?.length ? cartStorage : itemsInCart);
	}, [posts]);

	return (
		<PostsProvider.Provider
			value={{
				posts,
				setPosts,
				cart,
				setCart,
				doLike,
			}}
		>
			{children}
		</PostsProvider.Provider>
	);
};
