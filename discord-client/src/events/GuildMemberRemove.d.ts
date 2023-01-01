import { GuildMember } from "discord.js";
declare class GuildMemberRemoveEvent {
    on(member: GuildMember): void;
}
export default GuildMemberRemoveEvent;
