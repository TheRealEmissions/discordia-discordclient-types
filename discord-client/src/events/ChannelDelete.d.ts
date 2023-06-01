import { DMChannel, GuildChannel } from "discord.js";
declare class ChannelDeleteEvent {
    on(channel: DMChannel | GuildChannel): void;
}
export default ChannelDeleteEvent;
