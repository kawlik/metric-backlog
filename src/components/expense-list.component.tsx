import { ExpenseType } from '../types/@';
import { ExpenseListItemComponent } from './@';

export default function (props: { expenses: ExpenseType[] }) {
	// component logic

	// component layout
	return (
		<ul className="flex flex-1 flex-col-reverse gap-2 overflow-y-scroll">
			{props.expenses.map((expense) => (
				<ExpenseListItemComponent
					key={expense.id}
					date={expense.date}
					price={expense.price}
					title={expense.title}
					type={expense.type}
					user={expense.user}
				/>
			))}
		</ul>
	);
}
