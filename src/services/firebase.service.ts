import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './@';
import { FirebaseServiceConfig } from './configs/@';

// define service
class Service {
	constructor(private auth = getAuth(FirebaseServiceConfig)) {
		// register events
		onAuthStateChanged(auth, (user) => {
			AuthService.user$.next(user);
		});
	}

	get Auth() {
		return this.auth;
	}
}

// export service
export default new Service();
