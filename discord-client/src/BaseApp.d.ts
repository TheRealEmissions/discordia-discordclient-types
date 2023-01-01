import { HeadFile } from "ts-modular-bot-file-design";
import { Dependency } from "ts-modular-bot-types";
import Events from "events-types";
import Discord from "discord.js";
declare abstract class BaseApp extends HeadFile {
    constructor();
    type: Dependency;
    name: string;
    load: boolean;
    static Events: typeof Events;
    static readonly Client: Discord.Client<boolean>;
    getClient(): Discord.Client<boolean>;
    abstract init(): void;
    getDependencies(): Dependency[];
}
export default BaseApp;