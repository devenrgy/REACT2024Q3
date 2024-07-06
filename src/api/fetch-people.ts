import { FailedUsersResponse, UsersResponse, UsersSearchResponse } from '../types/users';

export const fetchPeople = async (): Promise<UsersResponse | UsersSearchResponse | FailedUsersResponse> => {
	const searchParams = new URLSearchParams(window.location.search);
	const name = searchParams.get('name');
	const page = searchParams.get('page');

	try {
		const data = await fetch(
			`https://www.swapi.tech/api/people/${name ? `?name=${name}` : ''}${page ? `?page=${page}&limit=20` : `${!name ? '?page=1&limit=20' : ''}`}`,
		).then((res) => res.json() as unknown as UsersResponse);
		console.log(data);
		return data;
	} catch (error: unknown) {
		return { error: new Error(String(error)) };
	}
};
