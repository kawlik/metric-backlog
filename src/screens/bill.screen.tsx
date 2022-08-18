import { FaArrowLeft, FaInfo } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { BillInputComponent, TopBarComponent } from '../components/@';

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
			<article className="flex flex-1 flex-col-reverse gap-10 overflow-y-scroll">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
			</article>
			<BillInputComponent action={() => {}} />
		</>
	);
}
