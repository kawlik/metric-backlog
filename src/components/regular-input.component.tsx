import { FormEvent } from 'react';

export default function (props: {
	actionOnChange?(event?: FormEvent<HTMLInputElement>): void;
	actionOnFocus?(event?: FormEvent<HTMLInputElement>): void;
	placeholder: string;
	type: string;
	value: string;
}) {
	// component logic

	// component layout
	return (
		<input
			onChange={props.actionOnChange}
			onFocus={props.actionOnFocus}
			className="bg-gray-400 bg-opacity-20 flex-1 px-4 py-2 rounded-md"
			placeholder={props.placeholder}
			type={props.type}
			value={props.value}
		/>
	);
}
