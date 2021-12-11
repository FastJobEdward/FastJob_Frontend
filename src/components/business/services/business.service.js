import axios from "axios";
import baseURL from "../../../core/http-common";

class BusinessService{
    endpoint = 'business';

    getAll(){
        return axios.get(`${baseURL}/${this.endpoint}`);
    }

    getById(id){
        return axios.get(`${baseURL}/${this.endpoint}/${id}`);
    }
}

export default new BusinessService();