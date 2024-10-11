import Echo from "laravel-echo";
import Pusher from "pusher-js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const sanctumFetch = useSanctumClient();

  window.Pusher = Pusher;

  window.Echo = new Echo({
    broadcaster: "reverb",
    key: config.public.REVERB_KEY,
    wsHost: config.public.REVERB_HOST,
    wsPort: 8080,
    wssPort: 443,
    forceTLS: false,
    authorizer: (channel: any) => {
      return {
        authorize: (socketId: string, callback: Function) => {
          sanctumFetch("/api/broadcasting/auth", {
            method: "POST",
            body: {
              socket_id: socketId,
              channel_name: channel.name,
            },
            onResponse({ response }) {
              callback(false, response._data);
            },
            onResponseError({ response }) {
              //
            },
          });
        },
      };
    },

    enabledTransports: ["ws", "wss"],
  });
});
