import { GuildScheduledEvent, User } from "discord.js";
declare class GuildScheduledEventUserAddEvent {
    on(event: GuildScheduledEvent, user: User): void;
}
export default GuildScheduledEventUserAddEvent;
