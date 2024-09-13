//importamos el api.service.js
import { api } from "./api.service.js";

//login
export function login(credenciales){
    return api().post('login', credenciales);
}
//registro

//perfil

//logout