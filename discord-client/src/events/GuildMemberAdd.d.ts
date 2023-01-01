import { GuildMember } from "discord.js";
declare class GuildMemberAddEvent {
    on(member: GuildMember): void;
}
export default GuildMemberAddEvent;
