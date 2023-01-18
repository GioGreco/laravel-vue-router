<template>
    <h1 class="p-4 border-bottom border-danger mb-3">Projects List</h1>
    <div class="row">
        <ProjectCardComponent v-for="(project, index) in store.projects" :key="project.id" :project="project"/>
    </div>
</template>

<script setup>
//imports
import {store} from '@/stores/store.js';
import { ref, onMounted } from 'vue';
import ProjectCardComponent from '@/components/ProjectCardComponent.vue';

//current view page
const currentPage = ref(1);

//on mounted : get projects from api
onMounted(()=>{
    store.getProjects(currentPage.value);
})
</script>