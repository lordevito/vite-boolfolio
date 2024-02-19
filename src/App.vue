<script>
//importo AppHeader
import AppHeader from "./components/AppHeader.vue";
//importo ProjectCard
import ProjectCard from "./components/ProjectCard.vue";

export default {
  name: "Boolfolio",
 
  components: {
    AppHeader,
    ProjectCard
  },
};
</script>

<template>
  <AppHeader />
  <!--<AppMain :projects="projects" />-->
  <router-view></router-view>

</template>

<style></style>