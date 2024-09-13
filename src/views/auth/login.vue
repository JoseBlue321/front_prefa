<template>
    <div>
        <h1>ingresar</h1>
        <div class="form-group">
            <label for="c">Ingrese su correo</label>
            <input v-model="credenciales.email" type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
        </div>
        {{ errors.email }}
        <div class="form-group">
            <label for="p">Contraseña</label>
            <input v-model="credenciales.password" type="password" class="form-control" name="" id="" placeholder="">
        </div>
        {{ errors.password }}
        <button @click="ingresar()" class="btn btn-primary">ingresar</button>
    </div>
    {{ credenciales }}
    
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 
import { login } from './../../services/auth.service.js'; 
const router = useRouter();

const errors = ref({});

//capturamos la informacion del formulario login
const credenciales = ref({
    email:"",
    password:""
});

//creamos la funcion ingresar
const ingresar = async () => {
  try {
    const response = await login(credenciales.value);
    //almacenamos el Token en el LocalStorage
    localStorage.setItem("access_token", response.data.access_token)
    router.push('users');
  } catch (error) {
    if(error.response.status == 422){
        errors.value = error.response.data.errors;
    }else{
        alert(error.response.data.message);
    }
  }
};

</script>
