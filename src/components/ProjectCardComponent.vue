<template>
    <div id="project-card" class="col-12 col-sm-6 col-md-4">
        <div class="card-inner d-flex flex-column align-items-center">
            <h4>{{ project.title }}</h4>
            <!-- <div class="project-pic my-3">
                <img class="projectImg" :src="`${imgBasePath}${project.project_image}`" :alt="project.title">
            </div> -->
            <!-- <p>{{ truncatedDescription }}</p> -->
            <div>
                <RouterLink class="btn btn-outline-success" :to="`/projects/${project.slug}`"><i class="fa-solid fa-circle-info"></i></RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
//imports
import {ref, onMounted, computed, watch} from 'vue';

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
    // height: 200px;
    .card-inner{
        color: grey;
        border: 1px solid grey;
        padding: 20px;
        border-radius: 15px;
        h4{
            text-align: center;
            padding-bottom: 8px;
            border-bottom: 1px solid black;
        }
        .project-pic{
            width: 100%;
            // height: 150px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>