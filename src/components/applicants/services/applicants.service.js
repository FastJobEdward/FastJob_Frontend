import axios from "axios";
import baseURL from "../../../core/http-common";

class ApplicantsService{
    endpoint = 'applicants';

    getAll(){
        return axios.get(`${baseURL}/${this.endpoint}`);
    }

    getById(id){
        return axios.get(`${baseURL}/${this.endpoint}/${id}`);
    }
}

export default new ApplicantsService();