<script setup>
const sanctumFetch = useSanctumClient();

onMounted(() => {
  //   Echo.channel("posts").listen("ExampleEvent", (e) => {
  //     console.log(e);
  //   });

  Echo.private("privateChannel").listen("PrivateEventExample", (e) => {
    console.log(e);
  });

  const sendRequest = () => {
    sanctumFetch("/api/realtime", {
      method: "POST",
    });
  };
});
</script>

<template>
  <Navigation />
  <div>Realtime</div>

  <button v-on:click="sendRequest">Send request</button>
</template>
