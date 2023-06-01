import { TextBasedChannel } from "discord.js";
declare class ChannelPinsUpdateEvent {
    on(channel: TextBasedChannel, time: Date): void;
}
export default ChannelPinsUpdateEvent;
