import { FaStar } from 'react-icons/fa';

export default function (props: { action(): void }) {
	// component logic
	const date = new Date().toLocaleDateString();

	// component layout
	return (
		<button onClick={props.action} className="flex flex-1 flex-nowrap flex-row gap-2">
			<div className='backdrop-blur-lg bg-gray-400 bg-opacity-20 border-green-500 border-2 my-auto p-2 rounded-full'>
				<FaStar className="text-3xl text-green-500" />
			</div>
			<div className="flex-1 overflow-hidden">
				<p className="font-bold text-gray-800 w-max">Bill title</p>
				<p className="text-sm text-gray-600 w-max">Participants Array</p>
			</div>
            <div className='my-auto'>
			    <p className="font-light italic text-gray-600 text-xs w-max">{date}</p>
            </div>
		</button>
	);
}
