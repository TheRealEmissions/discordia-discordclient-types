import { DMChannel, GuildChannel } from "discord.js";
declare class ChannelUpdateEvent {
    on(old: DMChannel | GuildChannel, notOld: DMChannel | GuildChannel): void;
}
export default ChannelUpdateEvent;
