import { BehaviorSubject, interval, Observable, timer } from 'rxjs';
import { BillType } from '../types/@';

class Service {
	private bills$ = new BehaviorSubject<BillType[]>([]);
    private bill$ = new BehaviorSubject<BillType|null>(null);

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

    getBill(billID: string): Observable<BillType|null> {
		return this.bill$;
	}
}

export default new Service();
