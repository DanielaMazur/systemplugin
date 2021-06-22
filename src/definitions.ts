export interface FileManagerPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
