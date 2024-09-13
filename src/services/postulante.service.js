import { api } from "./api.service";

export function index(){
    return api().get('postulantes');
};

export function store(datos){
    return api().post('postulantes',datos);
};