import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PostsProvider } from '../context/ContextProvider';
import { PostCard } from '../components/PostCard';

export const FavoritesCart = (props) => {
	const { cart } = useContext(PostsProvider);
	return (
		<div className="flex flex-wrap gap-5 justify-center my-5">
			{cart.map(({ id, description, image_url, tags }) => (
				<PostCard
					key={id}
					id={id}
					description={description}
					image_url={image_url}
					tags={tags}
				/>
			))}
		</div>
	);
};

FavoritesCart.propTypes = {};
