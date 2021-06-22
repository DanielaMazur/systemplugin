import { registerPlugin } from '@capacitor/core';

import type { FileManagerPluginPlugin } from './definitions';

const FileManagerPlugin = registerPlugin<FileManagerPluginPlugin>(
  'FileManagerPlugin',
  {
    web: () => import('./web').then(m => new m.FileManagerPluginWeb()),
  },
);

export * from './definitions';
export { FileManagerPlugin };
