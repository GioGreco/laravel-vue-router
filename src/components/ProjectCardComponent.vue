<template>
    <div id="project-card" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <h4>{{ project.title }}</h4>
        <div class="project-pic my-3">
            <img class="projectImg" :src="`${imgBasePath}${project.project_image}`" :alt="project.title">
        </div>
        <p>{{ truncatedDescription }}</p>
        <div>
            <RouterLink class="btn btn-outline-success" :to="`/projects/${project.slug}`">Mostra</RouterLink>
        </div>
    </div>
</template>

<script setup>
//imports
import {ref, onMounted, computed} from 'vue';

//props
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})

//truncate project's description
const truncatedDescription = computed(()=>{
    let maxLength = 100;
    if(props.project.description.length > maxLength){
        return props.project.description.substr(0, maxLength) + '...';
    }else{
        return props.project.description
    }
})

//img base path
const imgBasePath = ref('http://127.0.0.1:8000/storage/');

onMounted(()=>{
        const images = document.querySelectorAll('.projectImg');

        images.forEach(img => {
            img.addEventListener('error', ()=>{
            const defaultImg = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';
            img.src = defaultImg;
            img.alt = 'default pic'
        })
    })
})
</script>

<style lang="scss">
#project-card{
    height: 450px;
    h4{
        text-align: center;
        padding-bottom: 8px;
        border-bottom: 1px solid black;
    }
    .project-pic{
        width: 100%;
        height: 250px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>