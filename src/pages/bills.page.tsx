import { useEffect, useState } from 'react';
import { BillsListComponent, SearchBarComponent } from '../components/@';
import { BillType } from '../types/@';

export default function () {
	// component logic
	const [bills, setBills] = useState<BillType[]>([]);

	// updating bills
	const updateBills = async () => {
		fetch('/mock/bills.json')
			.then((res) => res.json())
			.then((res: BillType[]) => setBills(res));
	};

	// initial update
	useEffect(() => {
		updateBills();
	}, []);

	// component layout
	return (
		<article className="flex flex-1 flex-col gap-3 overflow-x-hidden overflow-y-scroll p-4">
			<SearchBarComponent action={() => {}} />
			<h3 className="font-semibold ">Active Bills</h3>
			<BillsListComponent bills={bills} />
		</article>
	);
}
