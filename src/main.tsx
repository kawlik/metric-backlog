import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// app providers
import { HashRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';

// app stylesheet
import './style.css';

// app initialization
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>,
);

// app service worker
registerSW({
	onNeedRefresh() {},
	onOfflineReady() {},
});
