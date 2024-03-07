import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Posts } from '../components/Posts';

export const PostsGallery = (props) => {
	return <div>{<Posts />}</div>;
};

PostsGallery.propTypes = {};
