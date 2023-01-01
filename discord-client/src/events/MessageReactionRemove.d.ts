import { MessageReaction, User } from "discord.js";
declare class MessageReactionRemoveEvent {
    on(m: MessageReaction, u: User): void;
}
export default MessageReactionRemoveEvent;
