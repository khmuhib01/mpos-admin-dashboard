import axios from 'axios';

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	headers: {'Content-Type': 'application/json'},
});

export function setAuthToken(token) {
	if (token) api.defaults.headers.common.Authorization = `Bearer ${token}`;
	else delete api.defaults.headers.common.Authorization;
}

export async function loginUser(credentials) {
	const {data} = await api.post('/api/auth/login', credentials);
	return data; // { token, data: user, ... }
}
