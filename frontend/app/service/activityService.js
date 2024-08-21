import axios from 'axios';

const API_BASE_URL ='http://localhost:3000/api/group';

const apiClient = axios.create({
    baseURL : API_BASE_URL,
    headers : {
        'Content-Type' : 'application/json'
    }
})

const apiActivityService = {
    getAllActivities: async () => {
        try {
            const res = await apiClient.get('/get-groups');
            return res.data;
        } catch(err) {
            throw err;
        }
    },

    createActivity : async (activity) =>{
        try{
            const res = await apiClient.post('/create-group', activity);
            return res.data;
        } catch (err){
            throw err;
        }
    },

    getAllActivityById : async (id) =>{
        try{
            const res = await apiClient.get(`/get-group/${id}`)
            return res.data;
        } catch(err){
            throw err;
        }
    },

    deleteActivity : async (id) =>{
        try{
            const res = await apiClient.get(`/delete-group/${id}`);
            return res.data;
        }catch(err){
            throw err;
        }
    },

    updateActivity : async (id) =>{
        try{
            const res = await apiClient.get(`/update-group/${id}`);
            return res.data;
        } catch(err) {
            throw err;
        }
    }
}
export default apiActivityService;