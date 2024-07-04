import React from 'react';

class Search extends React.Component<{ updateUsers: () => void }> {
	onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const searchValue = form.get('search');
		const url = new URL(window.location.toString());

		if (searchValue) {
			url.searchParams.delete('page');
			url.searchParams.set('name', searchValue.toString().trim());
		} else {
			url.search = '';
		}

		history.pushState(null, '', url);
		localStorage.setItem(
			'devenrgy_search',
			searchValue ? JSON.stringify(searchValue.toString().trim()) : JSON.stringify(searchValue),
		);
		localStorage.removeItem('devenrgy_total_pages');
		localStorage.removeItem('devenrgy_current_page');
		this.props.updateUsers();
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} className='flex items-center gap-2'>
				<label className='sr-only' htmlFor='search'>
					Search
				</label>
				<input
					defaultValue={JSON.parse(localStorage.getItem('devenrgy_search') ?? '""')}
					id='search'
					name='search'
					className='min-w-96 rounded px-4 py-2 text-lg outline-none duration-300 focus:bg-blue-700 focus:text-white placeholder:focus:text-white'
					placeholder='Favorite character name...'
					type='text'
				/>
				<button
					type='submit'
					className='rounded bg-white px-4 py-2 text-lg font-medium duration-300 hover:bg-blue-700 hover:text-white'
				>
					Search
				</button>
			</form>
		);
	}
}

export default Search;
