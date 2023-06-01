import { Guild } from "discord.js";
declare class GuildCreateEvent {
    on(guild: Guild): void;
}
export default GuildCreateEvent;
