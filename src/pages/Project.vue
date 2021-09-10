<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex>
        <h1>
          {{ project.name }}
          <span v-if="project.link">
            -
            <a :href="project.link" target="_blank">Live Site</a>
          </span>
        </h1>
        <v-layout row wrap>
          <v-flex md9 sm8 xs12>
            <div class="project-information mt-2">
              <p><b>Approximate Date:</b> {{ project.date }}</p>
              <p v-if="project.role"><b>Role:</b> {{ project.role }}</p>
              <p>
                <b>Relevant Technologies Used:</b>
                <span v-for="(skill, index) in project.tech" :key="index">
                  {{ skill }}
                  <span v-if="index != project.tech.length - 1">- </span>
                </span>
              </p>
              <p><b>Description:</b> {{ project.description }}</p>
              <p v-if="project.additionalLinks">
                <b>Additional links:</b>
                <span
                  v-for="(link, index) in project.additionalLinks"
                  :key="index"
                >
                  <a :href="link.url" target="_blank">{{ link.text }}</a>
                  <span v-if="index != project.additionalLinks.length - 1"
                    >-
                  </span>
                </span>
              </p>
            </div>
            <div>
              <h3>
                Desktop
                <span v-if="project.video">Interface Video</span>
                <span v-else>Screenshot</span>
              </h3>
              <video v-if="project.video" controls :poster="project.poster">
                <source :src="project.video" />
              </video>
              <v-img
                v-else
                :src="project.poster"
                :aspect-ratio="16 / 9"
              ></v-img>
            </div>
          </v-flex>
          <v-flex md3 sm4 xs12 v-if="project.mobile">
            <h3>Mobile Interface Video</h3>
            <video class="mobile-video" controls>
              <source :src="project.mobile" />
            </video>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Project",
  props: [],
  data() {
    return {};
  },
  computed: {
    project() {
      return this.$store.state.currentProject;
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
video {
  cursor: pointer;
  max-width: 100%;

  &.mobile-video {
    margin: 0 auto;
    max-height: 80vh;
  }
}
</style>
