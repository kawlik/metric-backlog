import { Navigate, Route, Routes } from 'react-router-dom';
import { useAtuhContext } from './contexts/@';
import { BillsPage, NewsPage, ProfilePage, ReportsPage } from './pages/@';
import { BillScreen, HomeScreen, SignInScreen, SignUpScreen } from './screens/@';

export default function () {
	// component logic
	const { user } = useAtuhContext();

	// component layout
	return !user ? (
		<Routes>
			{/* default fallback */}
			<Route path="*" element={<Navigate to="signin" />} />

			{/* auth utils screen */}
			<Route path="signin" element={<SignInScreen />} />
			<Route path="signup" element={<SignUpScreen />} />
		</Routes>
	) : (
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
