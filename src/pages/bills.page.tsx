import { BillListViewComponent, SearchBarComponent } from '../components/@';

export default function () {
	// component logic

	// component layout
	return (
		<article className="flex flex-1 flex-col gap-4 overflow-x-hidden overflow-y-scroll p-4">
			<SearchBarComponent action={() => {}} />
			<h3 className="font-semibold ">Active Bills</h3>
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
			<BillListViewComponent action={() => {}} />
		</article>
	);
}
