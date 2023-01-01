import { GuildScheduledEvent, User } from "discord.js";
declare class GuildScheduledEventUserRemoveEvent {
    on(event: GuildScheduledEvent, user: User): void;
}
export default GuildScheduledEventUserRemoveEvent;
