import { GuildMember } from "discord.js";
declare class GuildMemberAvailableEvent {
    on(member: GuildMember): void;
}
export default GuildMemberAvailableEvent;
