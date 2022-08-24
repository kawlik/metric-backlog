import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { AuthService } from '../services/@';
import { AuthContext } from './auth.context';

export default function (props: { children: JSX.Element | JSX.Element[] }) {
	// component logic
	const [user, setUser] = useState<User | null>(null);

	console.log(user);

	// update state
	useEffect(() => {
		AuthService.user$.subscribe({
			next: (user) => setUser(user),
		});
		AuthService.signInAnonymously();
	}, []);

	// component layout
	return (
		<AuthContext.Provider
			children={props.children}
			value={{
				user,
			}}
		/>
	);
}
