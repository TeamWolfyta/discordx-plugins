import { dirname, importx } from "@discordx/importer";
import { Plugin } from "discordx";

export class YTDLPlayerPlugin extends Plugin {
  async init(): Promise<void> {
    await importx(`${dirname(import.meta.url)}/**/*.cmd.{ts,js}`);
  }
}
