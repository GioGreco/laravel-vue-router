import {reactive} from 'vue';
import axios from 'axios';

export const store = reactive({
    apiBaseUrl: 'http://localhost:8000/api',
    imgBasePath: 'http://127.0.0.1:8000/storage/',
    projects: [],
    getProjects(page){
        axios.get(`${this.apiBaseUrl}/projects`, {params : {page}}).then((response)=>{
            this.projects = response.data.projects.data;
            console.log(response.data.projects);
        })
    }
        
});