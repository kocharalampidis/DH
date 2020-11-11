import React from "react";

function Welcome() {
	return (
		<>
			<h1>This is the Welcome page..</h1>

			<button
				className='bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
				type='button'>
				Small
			</button>
			<button
				className='bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
				type='button'>
				Regular
			</button>
			<button
				className='bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
				type='button'>
				Large
			</button>
		</>
	);
}

export default Welcome;
