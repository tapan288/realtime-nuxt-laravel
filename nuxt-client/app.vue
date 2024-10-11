<script setup>
onMounted(() => {
  Echo.channel("posts").listen("ExampleEvent", (e) => {
    console.log(e);
  });
});
</script>

<template>
  <Navigation />
  <div>Realtime</div>
</template>
