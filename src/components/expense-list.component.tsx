import { ExpenseType } from '../types/@';
import { ExpenseListItemComponent } from './@';

export default function (props: {
	expenses: ExpenseType[]
}) {
	// component logic

	// component layout
	return (
		<ul className="flex flex-1 flex-col-reverse overflow-y-scroll gap-2">
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
