import { GuildEmoji } from "discord.js";
declare class EmojiDeleteEvent {
    on(emoji: GuildEmoji): void;
}
export default EmojiDeleteEvent;
