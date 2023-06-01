import { DiscordEvents, EventTypes, GeneralEvents } from "ada-events-types";
declare class ClientEvents {
    static bind(eventName: DiscordEvents | GeneralEvents, type?: EventTypes): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
}
export default ClientEvents;
