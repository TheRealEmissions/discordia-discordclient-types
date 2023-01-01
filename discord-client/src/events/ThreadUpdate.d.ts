import { ThreadChannel } from "discord.js";
declare class ThreadUpdateEvent {
    on(oldThread: ThreadChannel, newThread: ThreadChannel): void;
}
export default ThreadUpdateEvent;
