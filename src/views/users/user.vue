<template>
  <div>
    <table class="table table-hover">
      <caption>Lista de usuarios</caption>
      <thead>
        <tr class="table-dark">
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>show</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users.users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <a class="btn btn-info" href="#" role="button">show</a>
          </td>
          <td>
            <a class="btn btn-success" href="#" role="button">update</a>
          </td>
          <td>
            <a class="btn btn-danger" href="#" role="button">delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="datos.name" type="text" name="name" id="name" class="form-control" placeholder=""
            aria-describedby="helpId">
          <small id="helpId" class="text-muted">ingrese su nombre completo</small>
        </div>

        <div class="form-group">
          <label for="email">email</label>
          <input v-model="datos.email" type="email" class="form-control" name="email" id="email"
            aria-describedby="emailHelpId" placeholder="">
          <small id="emailHelpId" class="form-text text-muted">ingrese su correo electrónico</small>
        </div>

        <div class="form-group">
          <label for="password">password</label>
          <input v-model="datos.password" type="password" class="form-control" name="password" id="password"
            placeholder="">
        </div>

        <button @click="registrar()" type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>


</template>

<script setup>
import { ref, onMounted } from 'vue';
import { index, store } from './../../services/users.service.js';

const users = ref({}); //index
const mostrar = async () => {
  try {
    const response = await index();
    users.value = response.data;
    console.log(users.value)
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
  }
};

const datos = ref({});  //store
const registrar = async () => {
  try {
    const response = await store(datos.value);
    alert(response.data.message);
    mostrar();
  } catch (error) {
    console.error('Error al registrar un usuario:', error.response.data.message);
    alert(error.response.data.message);
  }
};

// Llamar a la función al montar el componente
onMounted(() => {
  mostrar();
});
</script>
