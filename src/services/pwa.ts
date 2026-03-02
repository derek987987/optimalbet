// src/services/pwa.ts
import { registerSW } from 'virtual:pwa-register';

export const initPWA = () => {
  const updateSW = registerSW({
    onNeedRefresh() {
      // Show user notification to update
      if (confirm('New content available. Reload?')) {
        updateSW(true);
      }
    },
    onOfflineReady() {
      console.log('App ready to work offline');
    },
  });
};
