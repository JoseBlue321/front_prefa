<script setup>
import { ref,onMounted } from 'vue';
import { index,store,show,update,destroy } from './../../services/postulante.service.js';
const errors = ref({});
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
onMounted(()=>{
    mostrar()
});

//store
const datos = ref({});
const registrar = async()=>{
    try {
        if(datos.value.id){
            //actualizar
            const response = await update(datos.value.id,datos.value);
            datos.value = {};
        }else{
            //registrar
            const response = await store(datos.value);
        }
        mostrar();
    } catch (error) {
        console.log(error)
        if(error.response.status == 422){
            errors.value = error.response.data.errors;
    }else{
        alert(error.response.data.message);
    }
    }
}

//show
const ve = ref({});
const ver = async(postulante)=>{
    try {
        const response = await show(postulante.id)
        ve.value = response.data;
    } catch (error) {
    }
}

//update
const editar = async(postulante)=>{
    try {
        console.log(postulante);
        datos.value = postulante;
    } catch (error) {

    }
}

//delete
const eliminar = async(postulante)=>{
    if(confirm("Estas seguro de eliminar")){
        const response = await destroy(postulante.id);
        console.log(response)
        mostrar();
    }
}

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
                <th>show</th>
                <th>update</th>
                <th>delete</th>
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
                    <td>
                        <a @click="ver( postulante)" class="btn btn-info" role="button">ver</a>
                    </td>
                    <td>
                        <a @click="editar(postulante)" class="btn btn-success" role="button">editar</a>
                    </td>
                    <td>
                        <a @click="eliminar(postulante)" class="btn btn-danger" role="button">delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div>
        <h2>store</h2>
        <label for="user_id">user_id</label>
        <input type="number" id="user_id" v-model="datos.user_id">
        {{ errors.user_id }}
        <br>
        <label for="carnet">carnet</label>
        <input type="text" id="carnet" v-model="datos.carnet">
        {{ errors.carnet }}
        <br>
        <label for="nombre">nombre</label>
        <input type="text" id="nombre" v-model="datos.nombre">
        {{ errors.nombre }}
        <br>
        <label for="genero">genero</label>
        <input type="text" id="genero" v-model="datos.genero">
        {{ errors.genero }}
        <br>
        <label for="fecha_nacimiento">fecha de nacimiento</label>
        <input type="date" id="fecha_nacimiento" v-model="datos.fecha_nacimiento">
        {{ errors.fecha_nacimiento }}
        <br>
        <label for="correo">Correo</label>
        <input type="email" id="correo" v-model="datos.correo">
        {{ errors.correo }}
        <br>
        <label for="fecha_pago">fecha pago</label>
        <input type="datetime-local" id="fecha_pago" v-model="datos.fecha_pago">
        {{ errors.fecha_pago }}
        <br>
        <button @click="registrar()" class="btn btn-primary"> 
            {{ datos.id?'Actualizar':'Registrar' }}
        </button>
    </div>
    
    <div>
        <h2>show</h2>
        <p>
            {{ ve.id }}  {{ ve.user_id }}  {{ ve.carnet }}  {{ ve.nombre }}
        </p>
    </div>
</template>