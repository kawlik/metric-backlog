import { FaArrowLeft, FaBell, FaInfo, FaPaperclip, FaUser, FaWallet } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { PageSelectorComponent, TopBarComponent } from '../components/@';

export default function () {
	// component logic
	const location = useLocation();
	const navigate = useNavigate();

	// data:TopBarComponent
	const topLabel = location.pathname.split('/')[1] || 'Metric';

	// actions:TopBarComponent
	const goBack = () => navigate(-1);
	const goInfo = () => {};

	// actions:PageSelectorComponent
	const goAdd = () => {};
	const goPage = (page: string) => navigate(page);

	// component layout
	return (
		<>
			<TopBarComponent
				actionL={goBack}
				actionR={goInfo}
				iconL={FaArrowLeft}
				iconR={FaInfo}
				label={topLabel}
			/>
			<Outlet />
			<PageSelectorComponent
				actionAdd={goAdd}
				actionGeneric={goPage}
				active={location.pathname.split('/')[1] || ''}
				icons={[FaWallet, FaBell, FaPaperclip, FaUser]}
				pages={['bills', 'news', 'reports', 'profile']}
			/>
		</>
	);
}
