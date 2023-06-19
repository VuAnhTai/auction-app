export const EVENT_SOCKET = {
  NOTIFICATION: 'notification',
};

export type EventKeys = keyof typeof EVENT_SOCKET;
export type EventValues = (typeof EVENT_SOCKET)[EventKeys];
