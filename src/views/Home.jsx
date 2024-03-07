import React from 'react';
import PropTypes from 'prop-types';
import { Posts } from '../components/Posts';

export const Home = (props) => {
	return <div>{<Posts />}</div>;
};

Home.propTypes = {};
