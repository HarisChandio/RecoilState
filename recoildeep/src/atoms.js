import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default: {
        messaging: 12,
        networks: 13,
        jobs: 43,
        notifications: 14
    }
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})