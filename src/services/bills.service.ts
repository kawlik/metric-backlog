import { BehaviorSubject, Observable, map, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { BillType, ExpenseType } from '../types/@';

class Service {
	private bills$ = new BehaviorSubject<BillType[]>([]);
	private expenses$ = new BehaviorSubject<ExpenseType[]>([]);

	constructor() {
		timer(0, 10000).subscribe({
			next: () =>
				fetch('mock/bills.json')
					.then((res) => res.json())
					.then((res: BillType[]) => this.bills$.next(res)),
		});
	}

	getBills(): Observable<BillType[]> {
		return this.bills$;
	}

	getExpenses(): Observable<ExpenseType[]> {
		return this.expenses$;
	}

	getBill(billID: string): Observable<BillType> {
		return ajax.getJSON<BillType & { bills?: ExpenseType[] }>(`mock/bill-${1}.json`).pipe(
			map((res) => {
				this.expenses$.next(res?.bills || []);

				delete res.bills;

				return res;
			}),
		);
	}
}

export default new Service();
