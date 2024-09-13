//importamos 'axios' (antes instalamos) para hacer peticiones HTTP
import axios from "axios";

//almacenamos en una variable el Host
const urlHost = 'http://prefa.test/api/';

// exportamos la funcion api
export function api(){
    //guardamos el token
    let token = localStorage.getItem("access_token");

    //creamos la conexion (tunel) con Laravel
    const api = axios.create({
        baseURL: urlHost,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'appication/json',
            'Authorization': 'Bearer ' + token
        }
    });
    //interceptor (errors 401, 403)
    api.interceptors.response.use(
        (response)=>{
            return response;
        },
        (error)=>{
            if(error.response.status === 401){
                //Si detecta un error 
                console.log("interceptor************");
                localStorage.removeItem("access_token");
                window.location.href = 'login'
            }
            return Promise.reject(error);
        }
    );
    return api;
}


