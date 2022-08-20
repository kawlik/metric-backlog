import { IconType } from 'react-icons';

export default function (props: { action(): void; icon: IconType }) {
	// component logic

	// component layout
	return (
		<button
			onClick={props.action}
			className="bg-gray-400 bg-opacity-20 p-2 rounded-md w-8 active:scale-95"
		>
			<props.icon />
		</button>
	);
}
