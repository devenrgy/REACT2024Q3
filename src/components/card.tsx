import React from 'react';
import { User, UserSearchCollection } from '../types/users';

interface Props {
	item: User | UserSearchCollection;
}

class Card extends React.Component<Props> {
	state = {
		user: this.props.item,
	};

	render() {
		if ('properties' in this.state.user) {
			return (
				<li className='mx-auto basis-1/2 rounded border bg-blue-500 p-2 text-white'>
					<h3 className='mb-2 text-xl font-medium'>{this.state.user.properties.name}</h3>
					<p className='text-lg'>{this.state.user.properties.gender}</p>
					<p className=''>DOB: {this.state.user.properties.birth_year}</p>
					<p className=''>Skin color: {this.state.user.properties.skin_color}</p>
				</li>
			);
		}

		return (
			<li className='max-w-[400px] flex-grow basis-1/4 rounded border bg-blue-500 p-2 text-white'>
				<h3 className='mb-2 text-xl font-medium'>{this.state.user.name}</h3>
				<p className=''>{this.state.user.url}</p>
			</li>
		);
	}
}

export default Card;
