import { DMChannel, GuildChannel } from "discord.js";
declare class ChannelCreateEvent {
    on(channel: DMChannel | GuildChannel): void;
}
export default ChannelCreateEvent;
