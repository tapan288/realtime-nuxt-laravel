import Echo from "laravel-echo";
import Pusher from "pusher-js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  window.Pusher = Pusher;

  window.Echo = new Echo({
    broadcaster: "reverb",
    key: config.public.REVERB_KEY,
    wsHost: config.public.REVERB_HOST,
    wsPort: 8080,
    wssPort: 443,
    forceTLS: false,
    enabledTransports: ["ws", "wss"],
  });
});
