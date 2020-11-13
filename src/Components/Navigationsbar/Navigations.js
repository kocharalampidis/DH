import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<div class='py-1 font-bold  lg:flex-grow'>
			<Link
				to='/'
				class=' block mt-4 lg:inline-block lg:mt-0 px-3 py-1 rounded-md leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
				Home
			</Link>

			<Link
				to='/Blogspot'
				class='block mt-4 lg:inline-block lg:mt-0 px-3 py-1 rounded-md  leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
				Blogspot
			</Link>
			<Link
				to='/Eshop'
				class='block mt-4 lg:inline-block lg:mt-0 px-3 py-1 rounded-md leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
				Eshop
			</Link>

			<Link
				to='/Profile'
				class='block mt-4 lg:inline-block lg:mt-0 px-3 py-1 rounded-md leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
				Profile
			</Link>
			<Link
				to='/Library'
				class='block mt-4 lg:inline-block lg:mt-0 px-3 py-1 rounded-md leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
				Library
			</Link>
			<Link
				to='/Team'
				class='block mt-4 lg:inline-block lg:mt-0 px-3 py-1 rounded-md leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out mr-4'>
				Team
			</Link>
		</div>
	);
}
export default Navigation;
