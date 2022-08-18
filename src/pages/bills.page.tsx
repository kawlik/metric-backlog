import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	BackgroundMessageComponent,
	BillsListComponent,
	SearchBarComponent,
} from '../components/@';
import { BillType } from '../types/@';

export default function () {
	// component logic
	const navigate = useNavigate();

	const [bills, setBills] = useState<BillType[]>([]);

	// action:BillsListComponent
	const goBill = (billID: string) => {
		navigate(`/bill/${billID}`);
	};

	// initial update
	useEffect(() => {
		fetch('mock/bills.json')
			.then((res) => res.json())
			.then((res: BillType[]) => setBills(res));
	}, []);

	// component layout
	return (
		<article className="flex flex-1 flex-col gap-3 overflow-x-hidden overflow-y-scroll p-4">
			<SearchBarComponent action={() => {}} />
			<h3 className="font-semibold ">Active Bills</h3>
			{!!bills.length ? (
				<BillsListComponent action={goBill} bills={bills} />
			) : (
				<BackgroundMessageComponent label="There are no active bills yet" />
			)}
		</article>
	);
}
