import { IconType } from 'react-icons';
import { ButtonIconComponent } from './@';
import { Collapse } from './utils/@';

export default function (props: {
	actionL(): void;
	actionR(): void;
	iconL: IconType;
	iconR: IconType;
	label: string;
	skipL?: boolean;
	skipR?: boolean;
}) {
	// component logic

	// component layout
	return (
		<header className="bg-white px-3 py-4 z-30 flex flex-nowrap justify-between content-center">
			<Collapse
				collapse={!!props?.skipL}
				element={<ButtonIconComponent action={props.actionL} icon={props.iconL} />}
			/>
			<span className="capitalize my-auto text-lg font-semibold">{props.label}</span>
			<Collapse
				collapse={!!props?.skipR}
				element={<ButtonIconComponent action={props.actionR} icon={props.iconR} />}
			/>
		</header>
	);
}
