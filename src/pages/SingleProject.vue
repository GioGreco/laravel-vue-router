<template>
    <div v-if="store.singleProject" id="show-project" class="p-4">
        <RouterLink class="back-btn btn btn-dark" :to="'/projects'">BACK</RouterLink>
        <div class="d-flex flex-column align-items-center">
            <h1 class="py-4 border-bottom border-dark">{{ store.singleProject.title }}</h1>
            <div class="image my-3">
                <img v-if="checkImgPath()" :src="`${imgBasePath}${store.singleProject.project_image}`">
                <img v-else src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" alt="">
            </div>
            <div class="description"><span class="fw-bold">Description: </span>{{ store.singleProject.description }}</div>
            <div class="infos d-flex flex-column">
                <div class="info-row d-flex justify-content-around my-3">
                    <div v-if="store.singleProject.category" class="info-col d-flex justify-content-between">
                        <span class="fw-bold">Category:</span>
                        <span>{{store.singleProject.category.name}}</span>
                    </div>
                </div>
                <div class="info-row d-flex justify-content-around my-3">
                    <div v-if="store.singleProject.tags && store.singleProject.tags.length > 0" class="info-col d-flex justify-content-between">
                        <span class="fw-bold">Tags:</span>
                        <span class="mx-1" v-for="(tag, index) in store.singleProject.tags" :key="index">{{ tag.name }}</span>
                    </div>
                </div>
                <div class="info-row d-flex justify-content-around my-3">
                    <div class="info-col d-flex justify-content-between">
                        <span class="fw-bold">Slug:</span>
                        <span>{{store.singleProject.slug}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>Loading...</div>
</template>

<script setup>
//imports
import {store} from '@/stores/store.js';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

//active project
const imgBasePath = ref('http://127.0.0.1:8000/storage/');

//router
const route = useRoute();

//onMounted
onMounted(()=>{
    store.singleProject = null;
    store.getSingleProject(route.params.slug);
})

//handle minssing img
const checkImgPath = function(){
    if(store.singleProject.project_image && store.singleProject.project_image.startsWith('project')){
        return true
    }
    else{
        return false
    }
}
</script>

<style lang="scss" scoped>
#show-project{
    .image{
        width: 500px;
        height: 400px;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>