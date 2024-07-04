export type Users = User[];

export type FailedUsersResponse = {
	error: Error;
};

export type UsersResponse = {
	message: string;
	total_records: number;
	total_pages: number;
	previous: string | null;
	next: string | null;
	results: Users;
};

export type UsersSearchResponse = {
	message: string;
	result: UserSearchCollection[];
};

export type UserSearchCollection = {
	properties: UserProperties;
	description: string;
	_id: string;
	uid: string;
	__v: number;
};

export type UserProperties = {
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	created: string;
	edited: string;
	name: string;
	homeworld: string;
	url: string;
};

export type User = {
	uid: string;
	name: string;
	url: string;
};
