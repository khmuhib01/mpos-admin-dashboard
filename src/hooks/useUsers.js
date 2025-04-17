// src/hooks/useUsers.js
import useSWR from 'swr';
import {fetchUsers} from '../lib/apiClient';

export function useUsers() {
	const {data, error, isLoading} = useSWR('users', fetchUsers);
	return {users: data, isLoading, error};
}
