<template>
  <v-toolbar
    app
    fixed
    clipped-left
    flat
    class="primary white--text"
  >
    <span class="title ml-3 mr-2 logo" @click="$router.push('/')">
      Matt Darrington - Portfolio
    </span>
    <v-btn to="/" v-if="$route.path !== '/'">Back to projects</v-btn>
    <!--v-text-field
      solo-inverted
      flat
      label="Search"
      prepend-icon="search"
    ></v-text-field-->
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: 'layout-header',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .logo {
    cursor: pointer;
  }
</style>