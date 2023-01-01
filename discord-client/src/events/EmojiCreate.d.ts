import { GuildEmoji } from "discord.js";
declare class EmojiCreateEvent {
    on(emoji: GuildEmoji): void;
}
export default EmojiCreateEvent;
