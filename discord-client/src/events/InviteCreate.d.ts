import { Invite } from "discord.js";
declare class InviteCreateEvent {
    on(inv: Invite): void;
}
export default InviteCreateEvent;
