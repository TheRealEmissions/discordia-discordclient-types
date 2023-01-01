import { AutoModerationRule } from "discord.js";
declare class AutoModerationRuleUpdateEvent {
    on(old: AutoModerationRule | undefined, notOld: AutoModerationRule): void;
}
export default AutoModerationRuleUpdateEvent;
