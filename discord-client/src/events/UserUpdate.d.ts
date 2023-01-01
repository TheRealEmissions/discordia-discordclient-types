import { User } from "discord.js";
declare class UserUpdateEvent {
    on(oldUser: User, newUser: User): void;
}
export default UserUpdateEvent;
