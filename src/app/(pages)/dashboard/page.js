// src/app/dashboard/page.js
'use client';

import React, {useEffect} from 'react';
import {useAuth} from '../../../context/AuthContext';

export default function DashboardPage() {
	const {user} = useAuth();

	useEffect(() => {
		if (!user) window.location.href = '/login';
	}, [user]);

	if (!user) return null; // or a loader

	return (
		<div style={{padding: 20}}>
			<h1>Dashboard</h1>
			<p>Welcome back, {user.name}!</p>
		</div>
	);
}
