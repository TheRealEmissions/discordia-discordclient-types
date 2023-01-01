import { Guild } from "discord.js";
declare class GuildUpdateEvent {
    on(guild: Guild, newGuild: Guild): void;
}
export default GuildUpdateEvent;
