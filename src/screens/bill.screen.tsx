import { FaArrowLeft, FaInfo } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { TopBarComponent } from '../components/@';

export default function () {
	// component logic
	const location = useLocation();
	const navigate = useNavigate();

	// data:PageSelectorComponent
	const activePage = location.pathname.split('/')[1] || '';

	// data:TopBarComponent
	const topLabel = activePage || 'Metric';

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
			/>
		</>
	);
}
