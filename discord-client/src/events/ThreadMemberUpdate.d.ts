import { Collection, Snowflake, ThreadMember, ThreadChannel } from "discord.js";
declare class ThreadMembersUpdateEvent {
    on(added: Collection<Snowflake, ThreadMember>, removed: Collection<Snowflake, ThreadMember>, thread: ThreadChannel): void;
}
export default ThreadMembersUpdateEvent;
