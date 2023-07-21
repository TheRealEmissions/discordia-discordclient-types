import Base from "ada-file-design";
import { Dependency } from "ada-types";
import Events from "ada-events-types";
import Discord from "discord.js";
declare abstract class BaseApp extends Base {
    constructor();
    type: Dependency;
    name: string;
    load: boolean;
    static sharded: boolean;
    getSharded(): boolean;
    static Events: typeof Events;
    getEvents(): import("ada-events-types/events/src/App.js").default;
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
