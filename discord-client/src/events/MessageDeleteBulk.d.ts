import { Collection, GuildTextBasedChannel, Message, Snowflake } from "discord.js";
declare class MessageDeleteBulkEvent {
    on(m: Collection<Snowflake, Message>, channel: GuildTextBasedChannel): void;
}
export default MessageDeleteBulkEvent;
