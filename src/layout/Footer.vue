<template>
  <v-footer color="secondary px-2 white--text" app>
    <span>&copy; {{ new Date().getFullYear() }}</span>
    <router-link to="/" class="white--text ml-5">Home</router-link>
  </v-footer>
</template>

<script>
export default {
  name: "layout-footer",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>