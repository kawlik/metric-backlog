import { BillType } from '../types/@';
import { BillListViewComponent } from './@';

export default function (props: { action(billID: string): void; bills: BillType[] }) {
	// component logic

	// component layout
	return (
		<ul className="flex flex-1 flex-col  gap-4">
			{props.bills.map((bill) => (
				<BillListViewComponent
					action={() => props.action(bill.id)}
					id={bill.id}
					key={bill.id}
					participants={bill.participants}
					timestamp={bill.timestamp}
					title={bill.title}
				/>
			))}
		</ul>
	);
}
