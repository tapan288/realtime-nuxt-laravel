<script setup>
let channel;

onMounted(() => {
  channel = Echo.private("privateChannel");

  channel.listenForWhisper("whisper", (e) => {
    console.log(e);
  });
});

const whisper = () => {
  channel.whisper("whisper", { some: "data" });
};
</script>

<template>
  <div>
    <button @click="whisper">Whisper</button>
  </div>
</template>
