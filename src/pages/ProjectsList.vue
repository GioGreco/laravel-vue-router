<template>
    <h1 class="p-4 border-bottom border-danger mb-3">Projects List</h1>
    <div class="row">
        <ProjectCardComponent v-for="(project, index) in store.projects" :key="project.id" :project="project"/>
    </div>
    <nav class="d-flex" aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" @click="previous()">
                <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item" v-for="n in store.totPages" @click="handlePagination(n)">
                <a href="#" class="page-link">{{ n }}</a>
            </li>
        </ul>
        <span class="mx-4">Pagina attuale: {{ currentPage }}</span>
    </nav>
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

//pagination
const handlePagination = function(n){
    store.getProjects(n);
    currentPage.value = n;
}

const previous = function(){
    if(currentPage.value > 1){
        store.getProjects(currentPage.value - 1);
        currentPage.value -= 1;
    }
}
</script>