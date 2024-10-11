<script setup>
onMounted(() => {
  Echo.channel("posts").listen("ExampleEvent", (e) => {
    console.log(e);
  });
});
</script>

<template>
  <div>Realtime</div>
</template>
