import { StageInstance } from "discord.js";
declare class StageInstanceUpdateEvent {
    on(s: StageInstance | undefined, ns: StageInstance): void;
}
export default StageInstanceUpdateEvent;
