import { IconType } from 'react-icons';

export default function (props: {
	action(): void;
	icon: IconType;
	label: string;
	isActive?: boolean;
}) {
	// component logic

	// component layout
	return (
		<button
			onClick={props.action}
			className={`flex flex-1 flex-col gap-1 items-center overflow-x-hidden p-0.5 active:scale-95 ${
				props?.isActive && 'text-gray-500'
			}`}
		>
			<props.icon />
			<span className="capitalize font-light text-sm text-center w-max">
				{props.label}
			</span>
		</button>
	);
}
