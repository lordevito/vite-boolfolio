import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import AppAbout from './pages/AppAbout.vue';
import PageNotFound from "./pages/PageNotFound.vue";
import Project from './pages/Project.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
    {
        path: '/',
        name: 'home',
        component: AppHome
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectList
    },
    {
        path: '/about',
        name: 'about',
        component: AppAbout
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: PageNotFound,
    },
    {
        path: '/projects/:slug',
        name: 'single-project',
        component: Project,
    },

]
});
export { router };