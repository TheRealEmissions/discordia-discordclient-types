import { Invite } from "discord.js";
declare class InviteDeleteEvent {
    on(inv: Invite): void;
}
export default InviteDeleteEvent;
