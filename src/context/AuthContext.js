'use client';

import React, {createContext, useContext, useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {loginUser, setAuthToken} from '../lib/apiClient';

const AuthContext = createContext();

export function AuthProvider({children}) {
	const router = useRouter();

	// initialise from localStorage (if present)
	const [token, setToken] = useState(typeof window !== 'undefined' ? localStorage.getItem('token') : null);
	const [user, setUser] = useState(() => {
		if (typeof window !== 'undefined') {
			const u = localStorage.getItem('user');
			return u ? JSON.parse(u) : null;
		}
		return null;
	});

	// re‑apply header any time token changes
	useEffect(() => {
		setAuthToken(token);
	}, [token]);

	async function login(email, password) {
		const resp = await loginUser({email, password});
		const newToken = resp.token;
		const newUser = resp.data;

		setToken(newToken);
		setUser(newUser);
		localStorage.setItem('token', newToken);
		localStorage.setItem('user', JSON.stringify(newUser));

		router.push('/dashboard');
	}

	function logout() {
		setToken(null);
		setUser(null);
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setAuthToken(null);
		router.push('/login');
	}

	return <AuthContext.Provider value={{user, token, login, logout}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error('useAuth must be used within AuthProvider');
	return ctx;
}
