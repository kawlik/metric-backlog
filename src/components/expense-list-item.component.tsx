import { FaDollarSign } from 'react-icons/fa';
import { AvatarIconComponent } from './@';
import { Expand } from './utils/@';

export default function (props: {
	date: string;
	price: number;
	title: string;
	type: string;
	user: string;
}) {
	// component logic
	const isMine = !!Math.round(Math.random());

	// component layout
	return (
		<div className="flex flex-nowrap gap-2 px-3">
			{!isMine ? <AvatarIconComponent icon={FaDollarSign} /> : <Expand expand={true} />}
			<div className="bg-gray-400 bg-opacity-20 leading-none p-2 rounded-md">
				<p className={`font-semibold mb-2 ${isMine ? 'text-right' : 'text-lef'}`}>
					{props.title}
				</p>
				<p className={`font-bold font-mono ${isMine ? 'text-right' : 'text-lef'}`}>
					{props.price.toFixed(2)}
				</p>
			</div>
			{isMine ? <AvatarIconComponent icon={FaDollarSign} /> : <Expand expand={true} />}
		</div>
	);
}
