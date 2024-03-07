import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Favorites } from './Favorites';

// {
// 			"id": 1,
// 			"description": "¡Hermoso atardecer en la playa!",
// 			"image_url": "https://via.placeholder.com/600x400?text=Atardecer+en+la+playa",
// 			"likes": 0,
// 			"tokens_per_like": 0.5,
// 			"author": {
// 				"username": "usuario1",
// 				"name": "Juan Pérez"
// 			},
// 			"created_at": "2024-03-06T12:00:00Z",
// 			"tags": ["playa", "atardecer", "naturaleza"]
// 		},
export const PostCard = ({ id, description, image_url, tags }) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/posts/${id}`);
	};
	return (
		<div
			onClick={handleNavigate}
			className="rounded w-[250px] flex flex-col items-center bg-gray-600 p-5"
		>
			<figure className="w-full">
				<img
					className="object-cover"
					src={image_url}
					alt=""
				/>
			</figure>
			<p>{description}</p>
			<ul>
				{tags.map((tag) => (
					<li>{tag}</li>
				))}
			</ul>
			<div className="flex justify-end items-center">
				<Favorites id={id} />
			</div>
		</div>
	);
};

PostCard.propTypes = {};
