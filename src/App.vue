<template>
  <v-app>

    <layout-header>
    </layout-header>

    <v-content>
      <router-view>
      </router-view>
    </v-content>

    <layout-footer>
    </layout-footer>

  </v-app>
</template>

<script>
import Header from './layout/Header'
import Footer from './layout/Footer'

export default {
  name: 'app',
  components: {
    'layout-header': Header,
    'layout-footer': Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>