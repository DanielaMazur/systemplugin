import { WebPlugin } from '@capacitor/core';

import type { FileManagerPluginPlugin } from './definitions';

export class FileManagerPluginWeb
  extends WebPlugin
  implements FileManagerPluginPlugin {
  async containerURLPath(options: { forSecurityApplicationGroupIdentifier: string }): Promise<string> {
    console.log('ECHO', options);
    return 'options';
  }
}
