import { useEffect, useState } from 'react';
import { FaArrowLeft, FaInfo } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { BillInputComponent, ExpenseListComponent, TopBarComponent } from '../components/@';
import { BillsService } from '../services/@';
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

	// actions:TopBarComponent
	const goBack = () => navigate(-1);
	const goInfo = () => {};

	// initial update
	useEffect(() => {
		BillsService.getBill(billID).subscribe({
			next: (payload) => setBillData(payload),
		});

		BillsService.getExpenses().subscribe({
			next: (payload) => setExpenses(payload),
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
			<ExpenseListComponent expenses={expenses} />
			<BillInputComponent action={() => {}} />
		</>
	);
}
