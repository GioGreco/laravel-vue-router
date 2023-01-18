import {reactive} from 'vue';
import axios from 'axios';

export const store = reactive({
    apiBaseUrl: 'http://localhost:8000/api',
    imgBasePath: 'http://127.0.0.1:8000/storage/',
    projects: [],
    singleProject: {},
    totPages: null,
    currentPage: 1,
    getProjects(page){
        axios.get(`${this.apiBaseUrl}/projects`, {params : {page}}).then((response)=>{
            this.projects = response.data.projects.data;
            this.totPages = response.data.projects.last_page;
            console.log(response.data.projects);
        })
    },
    getSingleProject(routeParam){
        axios.get(`${this.apiBaseUrl}/projects/${routeParam}`).then((response)=>{
            if(response.data.success){
                console.log(response.data.results)
                this.singleProject = response.data.results;
                console.log(this.singleProject)
            } else {
                this.$router.push({name: 'not-found'});
            }
        })
    }
        
});