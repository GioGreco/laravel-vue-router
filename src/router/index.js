import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ProjectsList from '@/pages/ProjectsList.vue';
import NotFound from '@/pages/NotFound.vue';
import SingleProject from '@/pages/SingleProject.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsList
    },
    {
        path: '/projects/:slug',
        name: 'single-project',
        component: SingleProject
    },
    {
        path: '/not-found',
        name: 'not-found',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router