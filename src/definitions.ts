export interface FileManagerPluginPlugin {
  containerURLPath(options: { forSecurityApplicationGroupIdentifier: string }): Promise<string>;
}
