import { GuildBan } from "discord.js";
declare class GuildBanAddEvent {
    on(ban: GuildBan): void;
}
export default GuildBanAddEvent;
