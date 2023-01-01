import { Sticker } from "discord.js";
declare class StickerUpdateEvent {
    on(s: Sticker, ns: Sticker): void;
}
export default StickerUpdateEvent;
