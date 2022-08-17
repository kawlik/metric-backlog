import { BillType } from '../types/@';
import { BillListViewComponent } from './@';

export default function (props: { bills: BillType[] }) {
	// component logic

	// component layout
	return (
		<ul className="flex flex-1 flex-col gap-4">
			{props.bills.map((bill) => (
				<BillListViewComponent
					action={() => {}}
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
