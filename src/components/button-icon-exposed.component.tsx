import { IconType } from 'react-icons';

export default function (props: { action(): void; icon: IconType }) {
	// component logic

	// component layout
	return (
		<button
			onClick={props.action}
			className="bg-gray-200 flex-1 p-2 rounded-full active:scale-95"
		>
			<props.icon className="mx-auto my-auto text-xl" />
		</button>
	);
}
