import Echo from "laravel-echo";
import Pusher from "pusher-js";

export default defineNuxtPlugin(() => {
  window.Pusher = Pusher;
  window.Echo = new Echo({
    broadcaster: "reverb",
    key: "ygznll1nidd4nolutzf3",
    wsHost: "realtime-nuxt-laravel.test",
    wsPort: 8080,
    wssPort: 443,
    forceTLS: false,
    enabledTransports: ["ws", "wss"],
  });
});
