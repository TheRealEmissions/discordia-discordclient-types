import { Guild } from "discord.js";
declare class GuildIntegrationsUpdateEvent {
    on(guild: Guild): void;
}
export default GuildIntegrationsUpdateEvent;
