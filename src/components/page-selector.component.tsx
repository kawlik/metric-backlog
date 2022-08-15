import { IconType } from 'react-icons';
import { FaPlus } from 'react-icons/fa';
import { ButtonIconExposedComponent, ButtonIconLabelComponent } from './@';

export default function (props: {
	actionAdd(): void;
	actionGeneric(page: string): void;
	icons: [IconType, IconType, IconType, IconType];
	pages: [string, string, string, string];
}) {
	// component logic

	// component layout
	return (
		<footer className="bg-white gap-1 flex flex-nowrap justify-around p-3 pb-4 shadow-2xl z-30">
			<ButtonIconLabelComponent
				action={() => props.actionGeneric(props.pages[0])}
				icon={props.icons[0]}
				label={props.pages[0]}
			/>
			<ButtonIconLabelComponent
				action={() => props.actionGeneric(props.pages[1])}
				icon={props.icons[1]}
				label={props.pages[1]}
			/>
			<ButtonIconExposedComponent action={props.actionAdd} icon={FaPlus} />
			<ButtonIconLabelComponent
				action={() => props.actionGeneric(props.pages[2])}
				icon={props.icons[2]}
				label={props.pages[2]}
			/>
			<ButtonIconLabelComponent
				action={() => props.actionGeneric(props.pages[3])}
				icon={props.icons[3]}
				label={props.pages[3]}
			/>
		</footer>
	);
}