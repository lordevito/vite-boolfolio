<script>
import AppHeader from "../components/AppHeader.vue";
import axios from "axios";
export default {
  name: "Project",
  components: {
    AppHeader,
  },
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      apiUrls: {
        projects: "/api/projects",
      },
      project: {},
    };
  },
  methods: {
    getProjectDetail() {
      axios
        .get(
          this.baseUrl + this.apiUrls.projects + "/" + this.$route.params.slug
        )
        .then((response) => {
          if (response.data.data) {
            this.project = response.data.data;
          } else {
            this.$router.push({ name: "not-found" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getProjectDetail();
  },
};
</script>
<template>
  <AppHeader />
  <main>
    <div class="container py-4">
      <h1 class="text-center mb-4">{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <p v-if="project.type">Tipo di progetto: {{ project.type.name }}</p>
      <ul class="list-unstyled m-0 p-0" v-if="project.technologies?.length">
        Tecnologie:
        <li v-for="technology in project.technologies">
          - {{ technology.name }}
        </li>
      </ul>
      <router-link :to="{ name: 'projects' }" class="btn btn-primary mt-5">
        Torna alla lista
      </router-link>
    </div>
  </main>
</template>
<style scoped></style>