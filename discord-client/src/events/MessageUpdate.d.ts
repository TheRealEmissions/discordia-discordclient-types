import { Message } from "discord.js";
declare class MessageUpdateEvent {
    on(m: Message, nm: Message): void;
}
export default MessageUpdateEvent;
