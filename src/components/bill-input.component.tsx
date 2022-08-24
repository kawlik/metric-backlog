import { FormEvent, useState } from 'react';
import { FaArrowDown, FaArrowUp, FaPaperPlane, FaTrashAlt } from 'react-icons/fa';
import { ButtonIconComponent, RegularInputComponent, RegularSelectComponent } from './@';
import { Hide } from './utils/@';

export default function (props: { action(): void }) {
	// component logic
	const [isHiden, setIsHiden] = useState<boolean>(true);

	// new bill data from input
	const [billPrice, setBillPrice] = useState<string>('');
	const [billTitle, setBillTitle] = useState<string>('');
	const [billType, setBillType] = useState<string>('');

	// action:RegularInputComponent
	const expandBillInput = () => {
		setIsHiden(false);
	};

	const registerOnUpdateCallback = (callback: any) => {
		return (event: FormEvent<HTMLInputElement>) => {
			callback(event.currentTarget.value);
		};
	};

	// action:RegularSelectComponent
	const registerOnSelectCallback = (callback: any) => {
		return (event: FormEvent<HTMLSelectElement>) => {
			callback(event.currentTarget.value);
		};
	};

	// action:CLEAR
	const clearAndHide = () => {
		setBillPrice('');
		setBillTitle('');
		setBillType('');

		// hide input
		setIsHiden(true);
	};

	// action:SEND
	const sendAndHide = () => {
		// clear values and hide
		clearAndHide();
	};

	// component layout
	return (
		<div className="bg-whiete flex flex-col-reverse gap-2 px-3 py-4">
			<Hide
				hide={false}
				element={
					<>
						<section className="flex flex-1 gap-2">
							<RegularInputComponent
								actionOnChange={registerOnUpdateCallback(setBillTitle)}
								actionOnFocus={expandBillInput}
								placeholder="✨ Expense"
								type="text"
								value={billTitle}
							/>
							<ButtonIconComponent
								action={() => setIsHiden(!isHiden)}
								icon={isHiden ? FaArrowUp : FaArrowDown}
							/>
						</section>
					</>
				}
			/>
			<Hide
				hide={isHiden}
				element={
					<>
						<section className="flex flex-1 gap-2">
							<RegularInputComponent
								actionOnChange={registerOnUpdateCallback(setBillPrice)}
								actionOnFocus={expandBillInput}
								placeholder="💰 Price"
								type="number"
								value={billPrice}
							/>
							<ButtonIconComponent action={sendAndHide} icon={FaPaperPlane} />
						</section>
						<section className="flex flex-1 gap-2">
							<RegularSelectComponent
								actionOnSelect={registerOnSelectCallback(setBillType)}
								options={['Option 1', 'Option 2', 'Option 3']}
								placeholder="📊 Type"
								value={billType}
							/>
							<ButtonIconComponent action={clearAndHide} icon={FaTrashAlt} />
						</section>
					</>
				}
			/>
		</div>
	);
}
