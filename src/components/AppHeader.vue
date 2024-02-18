<script>
export default {
  name: "AppHeader",
};
</script>
<template>
  <header>
    <div class="container d-flex justify-content-between bg-secondary text-white p-3">
      <div>Immagine</div>
      <nav>
        <ul class="list-unstyled p-0 m-0 d-flex gap-4">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'project' }">Project</router-link></li>
          <li><router-link :to="{ name: 'about' }">About</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style></style>