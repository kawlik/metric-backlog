export default function (props: { action(): void; options: string[] }) {
	// component logic

	// component layout
	return (
		<select className="backdrop-blur-lg bg-gray-400 bg-opacity-20 flex-1 px-4 py-2 rounded-md">
			{props.options.map((option) => (
				<option key={option}>{option}</option>
			))}
		</select>
	);
}
