<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import AppHeader from "../components/AppHeader.vue";
import LoadButtons from '../components/LoadButtons.vue';
export default {
    name:'ProjectList',
    data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      apiUrls: {
        projects: "/api/projects",
      },
      projects: [],
      currentPage: 1,
      lastPage: null, 
      loading: false,    
    };
  },
    components: {
        ProjectCard,
        AppHeader,
        LoadButtons,
  },
    methods: {
    getProjects() {
      this.loading = true;
      axios
        .get(this.baseUrl + this.apiUrls.projects, {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          //console.log(response.data.data);
          this.lastPage = response,data,data.last_page;
          this.projects = response.data.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading =false;
        });
    },
    nextpage() {
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
        this.getProjects();
      }
    },
    prepage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getProjects();
      }
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <main>
    <div class="container py-4">
      <h1 class="text-center mb-4">Projects list</h1>
      <LoadButtons v-if="loading" />
      <div class="row gy-4" v-else>
        <div class="col col-md-3" v-for="project in projects">
          <ProjectCard :project="project" />
        </div>
        <div class="d-flex justify-content-center gap-2 mt-3">
          <button class="btn btn-primary" @click="prepage">prev</button>
          <button class="btn btn-primary" @click="nextpage">next</button>
        </div>
      </div>
    </div>
  </main>
</template>