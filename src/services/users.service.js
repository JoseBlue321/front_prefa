//importamos el api.service.js
import { api } from "./api.service.js";

//index
export function index(){
    return api().get('users')
};

//store
export function store(datos){
    return api().post('users', datos);
};
