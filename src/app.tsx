import { Navigate, Route, Routes } from 'react-router-dom';
import { BillsPage, NewsPage, ProfilePage, ReportsPage } from './pages/@';
import { HomeScreen } from './screens/@';

export default function () {
	// component logic

	// component layout
	return (
		<Routes>
			{/* home screen */}
			<Route path="*" element={<HomeScreen />}>
				<Route path="bills" element={<BillsPage />} />
				<Route path="news" element={<NewsPage />} />
				<Route path="profile" element={<ProfilePage />} />
				<Route path="reports" element={<ReportsPage />} />
			</Route>

			{/* fallback */}
			<Route path="*" element={<Navigate to="bills" />} />
		</Routes>
	);
}
