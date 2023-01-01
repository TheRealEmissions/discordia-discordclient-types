import { MessageReaction, User } from "discord.js";
declare class MessageReactionAddEvent {
    on(m: MessageReaction, u: User): void;
}
export default MessageReactionAddEvent;
