import { FaStar } from 'react-icons/fa';

export default function (props: {
	action(): void;
	id: string;
	participants: string[];
	timestamp: string;
	title: string;
}) {
	// component logic

	// component layout
	return (
		<button onClick={props.action} className="flex flex-1 flex-nowrap flex-row gap-2">
			<div className="backdrop-blur-lg bg-gray-400 bg-opacity-20 border-green-500 border-2 my-auto p-2 rounded-full">
				<FaStar className="text-3xl text-green-500" />
			</div>
			<div className="flex-1 my-auto overflow-hidden">
				<p className="font-bold text-gray-800 w-max">{props.title}</p>
				<p className="text-sm text-gray-600 w-max">{props.participants.join(', ')}</p>
			</div>
			<div className="my-auto">
				<p className="font-light italic text-gray-600 text-xs w-max">
					{props.timestamp}
				</p>
			</div>
		</button>
	);
}
