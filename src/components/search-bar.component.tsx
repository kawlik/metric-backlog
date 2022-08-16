export default function (props: { action(): void }) {
	// component logic

	// component layout
	return (
		<input
			className="backdrop-blur-lg bg-gray-800 bg-opacity-20 font-light px-4 py-3 rounded-full"
			placeholder="&#128269; Search"
			type="text"
		/>
	);
}
