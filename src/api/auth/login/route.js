import {NextResponse} from 'next/server';

export async function POST(req) {
	const {email, password} = await req.json();

	// 🔐 Replace with your real auth validation
	if (email === 'admin@example.com' && password === 'password') {
		const token = 'fake-jwt-token';
		const user = {email, name: 'Admin User'};
		return NextResponse.json({token, data: user});
	}

	return NextResponse.json({message: 'Invalid credentials'}, {status: 401});
}
