import { FaDollarSign } from 'react-icons/fa';
import { AvatarIconComponent } from './@';
import { Expande } from './utils/@';
import Collapse from './utils/collapse';

export default function (props: {
	date?: string;
	price?: number;
	title?: string;
	type?: string;
	user?: string;
}) {
	// component logic
	const isMine = !!Math.round(Math.random());

	// component layout
	return (
		<div className="flex flex-nowrap gap-2 px-3">
			{isMine ? <AvatarIconComponent icon={FaDollarSign} /> : <Expande expande={true} />}
			<div className="backdrop-blur-lg bg-gray-400 bg-opacity-20 p-2 rounded-md">
				{'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero aut porro a provident. Aut facere odit, eius voluptatem omnis molestias libero veniam tempore odio, ut vel voluptates, similique placeat quia.'.slice(
					0,
					Math.floor(Math.random() * 204) + 1,
				)}
			</div>
			{!isMine ? <AvatarIconComponent icon={FaDollarSign} /> : <Expande expande={true} />}
		</div>
	);
}
