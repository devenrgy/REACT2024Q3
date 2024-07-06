import React from 'react';

import Header from './components/header';
import { fetchPeople } from './api/fetch-people';
import Card from './components/card';
import { Users, UserSearchCollection } from './types/users';
import Pagination from './components/pagination';

class App extends React.Component {
	state: {
		users: Users | UserSearchCollection[] | null;
		current_page: number;
		total_pages: number | null;
		isError: boolean;
		isLoading: boolean;
	} = {
		users: null,
		total_pages: null,
		current_page: 1,
		isError: false,
		isLoading: false,
	};

	componentDidMount() {
		const getUsersLS = localStorage.getItem('devenrgy_result');
		const usersLS = getUsersLS ? JSON.parse(getUsersLS) : null;
		const getTotalPagesLS = localStorage.getItem('devenrgy_total_pages');
		const totalPagesLS = getTotalPagesLS ? JSON.parse(getTotalPagesLS) : null;
		const getCurrentPageLS = localStorage.getItem('devenrgy_current_page');
		const currentPageLS = getCurrentPageLS ? JSON.parse(getCurrentPageLS) : null;

		if (currentPageLS) {
			this.setState({ current_page: currentPageLS });
		}

		if (!usersLS || !totalPagesLS) {
			this.updateUsers();
		} else {
			this.setState({ users: usersLS, total_pages: totalPagesLS });
		}
	}

	updateCurrentPage = (newCurrentPage: number) => {
		this.setState({ current_page: newCurrentPage });
	};

	updateUsers = () => {
		this.setState({ isLoading: true });
		fetchPeople()
			.then((data) => {
				if ('results' in data) {
					this.setState({ users: data.results, total_pages: data.total_pages });
					localStorage.setItem('devenrgy_result', JSON.stringify(data.results));
					localStorage.setItem('devenrgy_total_pages', JSON.stringify(data.total_pages));
				}

				if ('result' in data) {
					this.setState({ users: data.result, total_pages: null });
					localStorage.setItem('devenrgy_result', JSON.stringify(data.result));
				}
			})
			.finally(() => this.setState({ isLoading: false }));
	};

	updateError = () => {
		this.setState({ isError: true });
	};

	render() {
		if (this.state.isError) {
			throw new Error('Congratulations, you broke my application!!! :(');
		}

		return (
			<div className='grid h-full grid-rows-[min-content_1fr]'>
				<Header updateError={this.updateError} updateUsers={this.updateUsers} />
				<main className='container'>
					<section className='grid grid-rows-[80%_20%] gap-20 py-8'>
						<div>
							<h1 className='mb-8 text-center text-4xl font-medium'>Star Wars characters</h1>
							{!this.state.isLoading ? (
								<ul className='mb-10 flex flex-wrap gap-x-4 gap-y-8'>
									{this.state.users &&
										!!this.state.users.length &&
										this.state.users.map((user) => {
											if ('properties' in user) {
												return <Card key={user._id} item={user} />;
											}
											return <Card key={user.uid} item={user} />;
										})}
								</ul>
							) : (
								<p className='flex h-[500px] items-center justify-center text-3xl'>Loading...</p>
							)}
						</div>
						<Pagination
							updateCurrentPage={this.updateCurrentPage}
							updateUsers={this.updateUsers}
							current_page={this.state.current_page}
							total_pages={this.state.total_pages}
						/>
					</section>
				</main>
			</div>
		);
	}
}

export default App;
