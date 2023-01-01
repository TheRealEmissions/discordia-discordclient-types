import { Role } from "discord.js";
declare class RoleUpdateEvent {
    on(r: Role, nr: Role): void;
}
export default RoleUpdateEvent;
