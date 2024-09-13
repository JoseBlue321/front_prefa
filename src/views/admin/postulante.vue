<script setup>
import { ref,onMounted } from 'vue';
import { index } from './../../services/postulante.service.js';

//index
const postulantes = ref({});
const mostrar = async()=>{
    try {
        const response = await index();
        console.log(response.data);
        postulantes.value = response.data;
    } catch (error) {
    }
};

//store
const datos = ref({});
function registrar(){
    console.log(datos.value);
}




onMounted(()=>{
    mostrar()
});


</script>

<style>
h2{
    color: red;
}
</style>

<template>
    <div>
        <h1>CRUD POSTULANTES</h1>
    </div>
    
    <div>
        <h2>index</h2>
        <table class="table table-hover">
            <thead>
                <tr class="table-light">
                <th>id</th>
                <th>user_id</th>
                <th>carnet</th>
                <th>nombre</th>
                <th>genero</th>
                <th>fecha nacimiento</th>
                <th>correo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="postulante in postulantes.postulantes" :key="postulante.id">
                    <td>{{ postulante.id }}</td>
                    <td>{{ postulante.user_id }}</td>
                    <td>{{ postulante.carnet }}</td>
                    <td>{{ postulante.nombre }}</td>
                    <td>{{ postulante.genero }}</td>
                    <td>{{ postulante.fecha_nacimiento }}</td>
                    <td>{{ postulante.correo }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div>
        <h2>store</h2>
        <label for="user_id">user_id</label>
        <input type="number" id="user_id" v-model="datos.user_id">
        <br>
        <label for="carnet">carnet</label>
        <input type="text" id="carnet" v-model="datos.carnet">
        <br>
        <label for="nombre">nombre</label>
        <input type="text" id="nombre" v-model="datos.nombre">
        <br>
        <label for="genero">genero</label>
        <input type="text" id="genero" v-model="datos.genero">

        <br>
        <button @click="registrar()">Registrar</button>
    </div>

</template>