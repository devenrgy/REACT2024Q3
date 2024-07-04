import React from 'react';

import Search from './search';

class Header extends React.Component<{
	updateUsers: () => void;
	updateError: () => void;
}> {
	onClick = () => {
		this.props.updateError();
	};

	render() {
		return (
			<header className='bg-blue-500 py-8'>
				<div className='container flex justify-center gap-2'>
					<Search updateUsers={this.props.updateUsers} />
					<button
						onClick={this.onClick}
						className='rounded bg-red-500 px-4 py-2 text-lg font-medium text-white duration-300 hover:bg-red-700 hover:text-white'
					>
						Crash App
					</button>
				</div>
			</header>
		);
	}
}

export default Header;
