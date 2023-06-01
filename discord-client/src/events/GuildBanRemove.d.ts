import { GuildBan } from "discord.js";
declare class GuildBanRemoveEvent {
    on(ban: GuildBan): void;
}
export default GuildBanRemoveEvent;
