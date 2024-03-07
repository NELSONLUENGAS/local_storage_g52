import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PostsProvider } from '../context/ContextProvider';
import { PostCard } from './PostCard';

export const Posts = (props) => {
	const { posts } = useContext(PostsProvider);
	// console.log(posts);
	return (
		<div className="flex flex-wrap gap-5 justify-center my-5">
			{posts.map(({ id, description, image_url, tags }) => (
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

Posts.propTypes = {};
