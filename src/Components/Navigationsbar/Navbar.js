import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";

import Navigations from "./Navigations";
import { Link } from "react-router-dom";

const Navbar = ({}) => {
	// const [isExpanded, toggleExpansion] = useState(false);
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<nav className='   top-0 border-b-2 border-white flex  items-center justify-between flex-wrap bg-gray-800  mb-3'>
			<div className='container px-8 mx-auto flex flex-wrap items-center justify-between'>
				<div className=' flex items-center flex-shrink-0 text-white mr-6'>
					<Link
						to='/'
						class='text-md font-bold leading-relaxed  mr-4 py-1  text-white'>
						Logo
					</Link>
				</div>
				<div className=' block lg:hidden'>
					<button
						class=' hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out
							text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none'
						type='button'
						onClick={() => setNavbarOpen(!navbarOpen)}>
						{navbarOpen ? (
							<FontAwesomeIcon icon={faWindowMinimize} />
						) : (
							<FontAwesomeIcon icon={faBars} />
						)}
					</button>
				</div>
				<div
					className={`${
						navbarOpen ? `block` : `hidden`
					} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
					<Navigations />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
