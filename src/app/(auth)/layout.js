// src/app/layout.js
'use client'; // so you can use Client Components and context here

import React from 'react';
import './../../styles/globals.css';

export default function AuthLayout({children}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
