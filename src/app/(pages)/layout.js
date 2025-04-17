// src/app/layout.js
'use client';

import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../store';
import './../../styles/globals.css'; // or whatever your global styles import is
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {AuthProvider} from '../../context/AuthContext';

export default function PagesLayout({children}) {
	return (
		<html lang="en">
			<body className="bg-gray-100">
				<Navbar />
				<AuthProvider>
					<Provider store={store}>{children}</Provider>
				</AuthProvider>

				<Footer />
			</body>
		</html>
	);
}
