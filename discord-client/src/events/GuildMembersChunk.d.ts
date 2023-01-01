import { Collection, Guild, GuildMember, Snowflake } from "discord.js";
type GuildMembersChunk = {
    index: number;
    count: number;
    nonce?: string;
};
declare class GuildMembersChunkEvent {
    on(members: Collection<Snowflake, GuildMember>, guild: Guild, chunk: GuildMembersChunk): void;
}
export default GuildMembersChunkEvent;
