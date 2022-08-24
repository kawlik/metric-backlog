import { FormEvent, useState } from 'react';
import { FaPaperPlane, FaTrashAlt } from 'react-icons/fa';
import { ButtonIconComponent, RegularInputComponent } from './@';

export default function (props: { action(): void }) {
	// component logic
	const [billPrice, setBillPrice] = useState<string>('');
	const [billTitle, setBillTitle] = useState<string>('');

	const registerOnUpdateCallback = (callback: any) => {
		return (event: FormEvent<HTMLInputElement>) => {
			callback(event.currentTarget.value);
		};
	};

	// action:clear
	const clear = () => {
		setBillPrice('');
		setBillTitle('');
	};

	// action:send
	const send = () => {
		// clear values
		clear();
	};

	// component layout
	return (
		<div className="bg-whiete flex flex-col gap-2 px-3 py-4">
			<section className="flex flex-1 gap-2">
				<RegularInputComponent
					actionOnChange={registerOnUpdateCallback(setBillPrice)}
					placeholder="💰 Price"
					type="number"
					value={billPrice}
				/>
				<ButtonIconComponent action={send} icon={FaTrashAlt} />
			</section>
			<section className="flex flex-1 gap-2">
				<RegularInputComponent
					actionOnChange={registerOnUpdateCallback(setBillTitle)}
					placeholder="✨ Expense"
					type="text"
					value={billTitle}
				/>
				<ButtonIconComponent action={send} icon={FaPaperPlane} />
			</section>
		</div>
	);
}
