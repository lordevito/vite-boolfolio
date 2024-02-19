<script>
import AppHeader from '../components/AppHeader.vue';
export default {
    name:'AppHome',
    components: {
    AppHeader,
  },
};
</script>

<template>
    <AppHeader />
    <main>
        <div class="container py-4">
            <h1 class="text-center mb-3">Homepage</h1>
        </div>
    </main>
</template>