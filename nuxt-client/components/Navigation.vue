<script setup lang="ts">
const { login: loginAction, user, isAuthenticated, logout } = useSanctumAuth();

const login = () => {
  loginAction({ email: "test@example.com", password: "password" });
};
</script>

<template>
  <div v-if="!isAuthenticated">
    <button v-on:click="login">Sign in</button>
  </div>
  <div v-else>
    <div>Signed in as {{ user.name }}</div>
    <button v-on:click="logout">Sign out</button>
  </div>
</template>
