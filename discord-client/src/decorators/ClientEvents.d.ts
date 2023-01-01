import { DiscordEvents, EventTypes } from "events-types";
declare class ClientEvents {
    static bind(eventName: DiscordEvents, type?: EventTypes): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
}
export default ClientEvents;
