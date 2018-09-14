<template>
  <v-container grid-list-lg>
    <h1>Work Projects</h1>
    <v-layout row wrap>
      <v-flex md4 sm6 xs12 v-for="(project, key) in $store.state.projects.work" :key="key">
        <v-img :src="project.poster" :aspect-ratio="16/9" @click="setProject(project)" class="project elevation-4 mb-2" align-center>
          <h2 class="white--text text-xs-center">{{project.name}}</h2>
        </v-img>
      </v-flex>
    </v-layout>

    <h1 class="mt-5">Personal Projects</h1>
    <v-layout row wrap>
      <v-flex md4 sm6 xs12 v-for="(project, key) in $store.state.projects.personal" :key="key">
        <v-img :src="project.poster" :aspect-ratio="16/9" @click="setProject(project)" class="project elevation-2">
          <h2 class="white--text text-xs-center">{{project.name}}</h2>
        </v-img>
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
    position: relative;

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      opacity: 0.7;
      transition: opacity 200ms ease-out;
      z-index: 1;
    }

    &:hover {

      &:after {
        opacity: 0;
      }

      h2 {
        opacity: 0;
      }
    }

    h2 {
      position: absolute;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
      pointer-events: none;
      opacity: 1;
      transition: opacity 200ms ease-out;
    }
  }
</style>
