import { FaArrowLeft, FaBell, FaInfo, FaPaperclip, FaUser, FaWallet } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { PageSelectorComponent, TopBarComponent } from '../components/@';

export default function () {
	// component logic
	const location = useLocation();
	const navigate = useNavigate();

	// data:PageSelectorComponent
	const activePage = location.pathname.split('/')[1] || '';

	// data:TopBarComponent
	const topLabel = activePage || 'Metric';
	const skipLeft = activePage === 'bills';

	// actions:PageSelectorComponent
	const goAdd = () => {};
	const goPage = (page: string) => navigate(page);

	// actions:TopBarComponent
	const goBack = () => navigate(-1);
	const goInfo = () => {};

	// component layout
	return (
		<>
			<TopBarComponent
				actionL={goBack}
				actionR={goInfo}
				iconL={FaArrowLeft}
				iconR={FaInfo}
				label={topLabel}
				skipL={skipLeft}
			/>
			<Outlet />
			<PageSelectorComponent
				actionAdd={goAdd}
				actionGeneric={goPage}
				active={activePage}
				icons={[FaWallet, FaBell, FaPaperclip, FaUser]}
				pages={['bills', 'news', 'reports', 'profile']}
			/>
		</>
	);
}
