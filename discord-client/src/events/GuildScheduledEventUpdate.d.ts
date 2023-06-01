import { GuildScheduledEvent } from "discord.js";
declare class GuildScheduledEventUpdateEvent {
    on(old: GuildScheduledEvent | undefined, notOld: GuildScheduledEvent): void;
}
export default GuildScheduledEventUpdateEvent;
