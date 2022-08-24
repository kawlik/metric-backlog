import { FaUserSecret } from 'react-icons/fa';
import { ButtonIconComponent, RegularInputComponent } from '../components/@';
import { AuthService } from '../services/@';

export default function () {
	// component logic

	// component layout
	return (
		<div className='flex flex-1 flex-col justify-center p-3'>
            <div className='flex gap-2'>
                <RegularInputComponent placeholder='SignIn Anonymously' type='text' value='' />
                <ButtonIconComponent action={AuthService.signInAnonymously} icon={FaUserSecret} />
            </div>
		</div>
	);
}
