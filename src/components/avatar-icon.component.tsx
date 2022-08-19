import { IconType } from 'react-icons';

export default function (props: { icon: IconType }) {
	// component logic

	// component layout
	return (
		<span className="bg-gray-200 mx-0 mt-auto p-2 rounded-md w-8">
			<props.icon />
		</span>
	);
}
