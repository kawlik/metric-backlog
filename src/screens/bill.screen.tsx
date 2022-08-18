import { useEffect, useState } from 'react';
import { FaArrowLeft, FaInfo } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { BillInputComponent, TopBarComponent } from '../components/@';
import { BillType, ExpenseType } from '../types/@';

export default function () {
	// component logic
	const location = useLocation();
	const navigate = useNavigate();

	// get bill id
	const billID = location.pathname.split('/')[2] || '';

	// bill data and expenses
	const [billData, setBillData] = useState<BillType | null>(null);
	const [expenses, setExpenses] = useState<ExpenseType[]>([]);

    console.log(billData);
    console.log(expenses);

	// actions:TopBarComponent
	const goBack = () => navigate(-1);
	const goInfo = () => {};

	// initial update
	useEffect(() => {
		fetch(`mock/bill-${billID}.json`)
			.then((res) => res.json())
			.then((res) => {

                const _expenses = res.bills as ExpenseType[];
                const _billData = {
                    id: res.id,
                    participants: res.participanrs,
                    timestamp: res.timestamp,
                    title: res.title
                } as BillType;

                setBillData(res);
                setExpenses(res);
			});
	}, []);

	// component layout
	return (
		<>
			<TopBarComponent
				actionL={goBack}
				actionR={goInfo}
				iconL={FaArrowLeft}
				iconR={FaInfo}
				label={billData?.title || ''}
			/>
			<article className="flex flex-1 flex-col-reverse gap-10 overflow-y-scroll">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					exercitationem voluptates natus! Quas, nihil unde adipisci sit sequi
					officiis perspiciatis quibusdam voluptates alias, error nulla vitae. Alias
					provident culpa cupiditate.
				</p>
			</article>
			<BillInputComponent action={() => {}} />
		</>
	);
}
