import Base from "ts-modular-bot-file-design";
import { Dependency } from "ada-types";
import Events from "ts-modular-bot-addon-events-types";
import Discord from "discord.js";
declare abstract class BaseApp extends Base {
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
    abstract init(): Promise<void>;
    getDependencies(): Dependency[];
    static readonly ShardManager: Discord.ShardingManager | null;
    getShardManager(): Discord.ShardingManager;
}
export default BaseApp;
