import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { InertiaProgress } from '@inertiajs/progress';

import '../css/index.css';

document.addEventListener('DOMContentLoaded', () => {
  InertiaProgress.init({ showSpinner: true });

  createInertiaApp({
    resolve: (name) => {
      const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
      const page = pages[`./pages/${name}.tsx`];
      return page;
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />);
    },
  });
});
