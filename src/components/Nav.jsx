import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const Nav = (props) => {
	return (
		<nav className="flex gap-4 items-center justify-end">
			<NavLink
				to="/"
				className={({ isActive }) => {
					return isActive
						? 'active font-bold uppercase'
						: 'font-bold uppercase';
				}}
			>
				Home
			</NavLink>
			<NavLink
				to="/posts"
				className={({ isActive }) => {
					return isActive
						? 'active font-bold uppercase'
						: 'font-bold uppercase';
				}}
			>
				Posts
			</NavLink>
			<NavLink
				to="/cart"
				className={({ isActive }) => {
					return isActive
						? 'active font-bold uppercase'
						: 'font-bold uppercase';
				}}
			>
				Cart
			</NavLink>
		</nav>
	);
};

Nav.propTypes = {};
