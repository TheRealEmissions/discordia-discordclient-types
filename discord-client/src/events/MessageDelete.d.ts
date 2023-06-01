import { Message } from "discord.js";
declare class MessageDeleteEvent {
    on(m: Message): void;
}
export default MessageDeleteEvent;
