import { ThreadChannel } from "discord.js";
declare class ThreadDeleteEvent {
    on(t: ThreadChannel): void;
}
export default ThreadDeleteEvent;
