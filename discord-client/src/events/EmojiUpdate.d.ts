import { GuildEmoji } from "discord.js";
declare class EmojiUpdateEvent {
    on(old: GuildEmoji, notOld: GuildEmoji): void;
}
export default EmojiUpdateEvent;
