import { GuildMember } from "discord.js";
declare class GuildMemberUpdateEvent {
    on(old: GuildMember, notOld: GuildMember): void;
}
export default GuildMemberUpdateEvent;
