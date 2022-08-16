import { SearchBarComponent } from '../components/@';

export default function () {
	// component logic

	// component layout
	return (
		<article className="flex flex-1 flex-col gap-2 overflow-x-hidden overflow-y-scroll p-4">
			<SearchBarComponent action={() => {}} />
		</article>
	);
}
