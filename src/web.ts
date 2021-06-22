import { WebPlugin } from '@capacitor/core';

import type { FileManagerPluginPlugin } from './definitions';

export class FileManagerPluginWeb
  extends WebPlugin
  implements FileManagerPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
