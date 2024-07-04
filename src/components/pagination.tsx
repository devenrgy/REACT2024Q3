import React from 'react';

class Pagination extends React.Component<{
	updateUsers: () => void;
	total_pages: number | null;
	current_page: number;
	updateCurrentPage: (currentNum: number) => void;
}> {
	onClick = (currentNum: number) => {
		const url = new URL(window.location.toString());

		url.searchParams.set('page', currentNum.toString());
		history.pushState(null, '', url);
		localStorage.setItem('devenrgy_current_page', JSON.stringify(currentNum));
		this.props.updateUsers();
		this.props.updateCurrentPage(currentNum);
	};
	render() {
		return (
			<ul className='flex justify-center gap-3'>
				{this.props.total_pages &&
					Array.from({ length: this.props.total_pages }, (_, i) => i + 1).map((item) => (
						<li key={item}>
							<button
								type='button'
								onClick={() => this.onClick(item)}
								className={`h-16 w-16 rounded border text-lg ${this.props.current_page === item ? 'pointer-events-none bg-blue-700 text-white' : 'duration-300 hover:bg-blue-700 hover:text-white'}`}
							>
								{item}
							</button>
						</li>
					))}
			</ul>
		);
	}
}

export default Pagination;
