import { Presence } from "discord.js";
declare class PresenceUpdateEvent {
    on(o: Presence | undefined, n: Presence): void;
}
export default PresenceUpdateEvent;
