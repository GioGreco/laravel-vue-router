<template>
    <div class="vh-100 position-relative">
        <div class="top-bar position-absolute">
            <NavbarComponent/>
        </div>
        <div class="box flex-column justify-content-around">
            <div class="row projects-container">
                <TransitionGroup name="projectsFX" appear>
                    <ProjectCardComponent v-for="(project, index) in store.projects" :key="project.id" :project="project"/>
                </TransitionGroup>
            </div>
            <nav class="d-flex" aria-label="Page navigation example">
                <ul class="pagination m-0">
                    <li class="page-item" @click="previous()">
                        <a class="page-link" href="#">Previous</a>
                    </li>
                    <li class="page-item" v-for="n in store.totPages" @click="handlePagination(n)">
                        <a href="#" class="page-link">{{ n }}</a>
                    </li>
                </ul>
                <span class="mx-4">Pagina attuale: {{ currentPage }}</span>
            </nav>
        </div>
    </div>
</template>

<script setup>
//imports
import {store} from '@/stores/store.js';
import { ref, onMounted } from 'vue';
import ProjectCardComponent from '@/components/ProjectCardComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import gsap from 'gsap';

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

<style lang="scss" scoped>

.top-bar{
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
}
.box{
    width: 100%;
    height: 90%;
    padding: 40px;
    border: 3px solid black;
    position: absolute;
    top: 50%;
    transform: translate(0 , -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;

    &::before, &::after {
                position: absolute;
                background-color: beige;
                z-index: -1;
                transition: .8s;
                content: '';
            }

            &::before {
                height: 105%;
                width: 70%;
            }

            &::after {
                width: 105%;
                height: 70%;
            }
    .projects-container{
        height: 80%;
    }
}

.projectsFX-enter-to, .projectsFX-leave-from{
    opacity: 1;
}

.projectsFX-enter-from, .projectsFX-leave-to{
    transform: translate(0, 20px);
    opacity: 0;
}

.projectsFX-enter-active, .projectsFX-leave-active{
    transition: all 1s ease .5s;
}
</style>