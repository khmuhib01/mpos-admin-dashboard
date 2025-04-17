'use client';

import React, {useState} from 'react';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setError('');
		setLoading(true);

		console.log('submitted', {email, password});

		// simulate async
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}

	return (
		<div
			style={{
				maxWidth: 400,
				margin: '4rem auto',
				padding: 20,
				border: '1px solid #ccc',
				borderRadius: 8,
				fontFamily: 'sans-serif',
			}}
		>
			<h1 style={{marginBottom: '1rem'}}>Login</h1>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				{error && <p style={{color: 'red', margin: 0}}>{error}</p>}
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					style={{
						padding: 8,
						borderRadius: 4,
						border: '1px solid #ddd',
						fontSize: 16,
					}}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					style={{
						padding: 8,
						borderRadius: 4,
						border: '1px solid #ddd',
						fontSize: 16,
					}}
				/>
				<button
					type="submit"
					disabled={loading}
					style={{
						padding: 12,
						borderRadius: 4,
						background: '#0070f3',
						color: '#fff',
						border: 'none',
						fontSize: 16,
						cursor: loading ? 'default' : 'pointer',
					}}
				>
					{loading ? 'Logging in…' : 'Login'}
				</button>
			</form>
		</div>
	);
}
