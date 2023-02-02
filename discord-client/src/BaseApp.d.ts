import { HeadFile } from "ts-modular-bot-file-design";
import { Dependency } from "ts-modular-bot-types";
import Events from "ts-modular-bot-addon-events-types";
import Discord from "discord.js";
declare abstract class BaseApp extends HeadFile {
    constructor();
    type: Dependency;
    name: string;
    load: boolean;
    static sharded: boolean;
    getSharded(): boolean;
    static Events: typeof Events;
    static readonly Client: Discord.Client<boolean> | null;
    getClient(): Discord.Client<boolean>;
    static readonly Rest: Discord.REST;
    getRest(): Discord.REST;
    abstract init(): void;
    getDependencies(): Dependency[];
    static readonly ShardManager: Discord.ShardingManager | null;
    getShardManager(): Discord.ShardingManager;
}
export default BaseApp;
