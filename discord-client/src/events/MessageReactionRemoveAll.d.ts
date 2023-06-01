import { Collection, Message, MessageReaction, Snowflake } from "discord.js";
declare class MessageReactionRemoveAllEvent {
    on(m: Message, u: Collection<string | Snowflake, MessageReaction>): void;
}
export default MessageReactionRemoveAllEvent;
