import { FormEvent } from 'react';

export default function (props: {
	actionOnSelect(event: FormEvent<HTMLSelectElement>): void;
	options: string[];
    placeholder: string;
	value: string;
}) {
	// component logic

	// component layout
	return (
		<select
			onChange={props.actionOnSelect}
			className="bg-gray-400 bg-opacity-20 flex-1 px-4 py-2 rounded-md"
			value={props.value}
		>
            <option disabled={true} value="">{props.placeholder}</option>
			{props.options.map((option) => (
				<option key={option} value="option">{option}</option>
			))}
		</select>
	);
}
