import { useState } from 'react';
import { FaArrowDown, FaArrowUp, FaPaperPlane, FaTrashAlt } from 'react-icons/fa';
import { ButtonIconComponent, RegularInputComponent, RegularSelectComponent } from './@';
import { Hide } from './utils/@';

export default function (props: { action(): void }) {
	// component logic
	const [hiden, setHiden] = useState<boolean>(true);

	// new bill data from input
	const [billPrice, setBillPrice] = useState<number>(0);
	const [billTitle, setBillTitle] = useState<string>('');
	const [billType, setBillType] = useState<string>('');

	// component layout
	return (
		<div className="bg-whiete flex flex-col-reverse gap-2 px-3 py-4">
			<Hide
				hide={false}
				element={
					<>
						<section className="flex flex-1 gap-2">
							<RegularInputComponent
								action={() => {}}
								placeholder="✨ Expense"
								type="text"
							/>
							<ButtonIconComponent
								action={() => setHiden(!hiden)}
								icon={hiden ? FaArrowUp : FaArrowDown}
							/>
						</section>
					</>
				}
			/>
			<Hide
				hide={hiden}
				element={
					<>
						<section className="flex flex-1 gap-2">
							<RegularInputComponent
								action={() => {}}
								placeholder="💰 Price"
								type="number"
							/>
							<ButtonIconComponent action={() => {}} icon={FaPaperPlane} />
						</section>
						<section className="flex flex-1 gap-2">
							<RegularSelectComponent
								action={() => {}}
								options={['Option 1', 'Option 2', 'Option 3']}
							/>
							<ButtonIconComponent action={() => {}} icon={FaTrashAlt} />
						</section>
					</>
				}
			/>
		</div>
	);
}
