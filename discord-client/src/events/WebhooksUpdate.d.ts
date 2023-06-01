import { TextChannel, NewsChannel, VoiceChannel, ForumChannel } from "discord.js";
declare class WebhooksUpdateEvent {
    on(data: TextChannel | NewsChannel | VoiceChannel | ForumChannel): void;
}
export default WebhooksUpdateEvent;
