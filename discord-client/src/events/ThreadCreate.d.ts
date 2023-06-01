import { ThreadChannel } from "discord.js";
declare class ThreadCreateEvent {
    on(t: ThreadChannel, n: boolean): void;
}
export default ThreadCreateEvent;
