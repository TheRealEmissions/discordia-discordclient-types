import { Collection, Guild, Snowflake, ThreadChannel } from "discord.js";
declare class ThreadListSyncEvent {
    on(t: Collection<Snowflake, ThreadChannel>, g: Guild): void;
}
export default ThreadListSyncEvent;
