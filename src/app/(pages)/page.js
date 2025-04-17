// app/page.js
'use client';
import {useAuth} from '../../context/AuthContext';
import React, {useEffect} from 'react';

export default function HomePage() {
	const {user} = useAuth();

	useEffect(() => {
		if (!user) window.location.href = '/login';
	}, [user]);

	if (!user) return null;
	return (
		<div style={{padding: 20}}>
			<h1>Dashboard</h1>
			<p>Welcome back, {user.name}!</p>
		</div>
	);
}
