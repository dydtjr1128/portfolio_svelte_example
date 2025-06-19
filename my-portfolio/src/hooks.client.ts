import { dev } from '$app/environment';
import { initToolbar } from '@stagewise/toolbar';

if (dev) {
	initToolbar({
		plugins: []
	});
} 