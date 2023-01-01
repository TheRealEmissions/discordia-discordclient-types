import { VoiceState } from "discord.js";
declare class VoiceStateUpdateEvent {
    on(oldState: VoiceState, newState: VoiceState): void;
}
export default VoiceStateUpdateEvent;
