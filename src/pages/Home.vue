<template>
  <v-container fluid grid-list-lg>
    <h1>Work Projets</h1>
    <v-layout row wrap>
      <v-flex xs6 sm4 v-for="(project, key) in $store.state.projects.work" :key="key">
        <v-img :src="project.poster" :aspect-ratio="16/9" @click="setProject(project)" class="project elevation-2">
        </v-img>
        <p>{{project.name}}</p>
      </v-flex>
    </v-layout>

    <h1>Personal Projets</h1>
    <v-layout row wrap>
      <v-flex xs6 sm4 v-for="(project, key) in $store.state.projects.personal" :key="key">
        <v-img :src="project.poster" :aspect-ratio="16/9" @click="setProject(project)" class="project elevation-2">
        </v-img>
        <p>{{project.name}}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  props: [],
  data () {
    return {
    }
  },
  methods: {
    setProject(project) {
      this.$store.commit('setProject', project);
      this.$router.push('/project');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .project {
    cursor: pointer;
  }
</style>
