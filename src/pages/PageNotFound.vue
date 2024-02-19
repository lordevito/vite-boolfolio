<script>
export default {
  name: "NotFound",
};
</script>
<template>
  <div class="text-center">
    <h1>PAGE NOT FOUND</h1>
    <img src="/assets/image.png" alt="" />
    <router-link :to="{ name: 'home' }" class="btn btn-primary m-5">
      Torna alla home
    </router-link>
  </div>
</template>
<style></style>