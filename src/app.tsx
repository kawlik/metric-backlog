import { Navigate, Route, Routes } from 'react-router-dom';
import { BillsPage, NewsPage, ProfilePage, ReportsPage } from './pages/@';
import { BillScreen, HomeScreen } from './screens/@';

export default function () {
	// component logic

	// component layout
	return (
		<Routes>
			{/* default fallback */}
			<Route path="*" element={<Navigate to="bills" />} />

			{/* dedicated screen */}
			<Route path="bill/:billID" element={<BillScreen />} />

			{/* home screen */}
			<Route path="*" element={<HomeScreen />}>
				<Route path="bills" element={<BillsPage />} />
				<Route path="news" element={<NewsPage />} />
				<Route path="profile" element={<ProfilePage />} />
				<Route path="reports" element={<ReportsPage />} />
			</Route>
		</Routes>
	);
}
