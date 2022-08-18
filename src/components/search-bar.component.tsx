export default function (props: { action(): void }) {
	// component logic

	// component layout
	return (
		<input
			className="backdrop-blur-lg bg-gray-400 bg-opacity-20 px-4 py-3 rounded-md"
			placeholder="🔍 Search"
			type="text"
		/>
	);
}
