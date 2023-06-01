import { Message } from "discord.js";
declare class MessageCreateEvent {
    on(m: Message): void;
}
export default MessageCreateEvent;
