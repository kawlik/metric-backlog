export default function (props: { action(): void; placeholder: string; type: string }) {
	// component logic

	// component layout
	return (
		<input
			className="bg-gray-200 flex-1 px-4 py-2 rounded-md"
			placeholder={props.placeholder}
			type={props.type}
		/>
	);
}
