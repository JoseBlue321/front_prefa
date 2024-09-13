//importamos 'axios' (antes instalamos)
import axios from "axios";

//almacenamos en una variable el Host
const urlHost = 'http://prefa.test/api/';

// exportamos la funcion api
export function api(){
    //guardamos el token
    let token = "";

    //creamos la conexion (tunel) con Laravel
    const api = axios.create({
        baseURL: urlHost,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'appication/json',
            'Authorization': 'Bearer ' + token
        }
    });
    return api;
}


