import { api } from "./api.service";

export function index(){
    return api().get('postulantes');
};

export function store(datos){
    return api().post('postulantes',datos);
};

export function show(id){
    return api().get(`postulantes/${id}`);
};

export function update(id,datos){
    return api().put(`postulantes/${id}`, datos);
};

export function destroy(id){
    return api().delete(`postulantes/${id}`);
};
