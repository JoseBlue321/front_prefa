<script setup>
  //Manejo de Datos
  const name = "jose apaza saavedra";
  const col = "color: blue";
  const sw = true;
  const show = false;
  const nombres = ["jose","eve","maria","ana","juan","pablo"]
  const postulantes = [
    {
      id:1,
      carnet:"9087013",
      nombre:"jose",
      fecha_nacimiento: "2000-01-20",
      genero:"masculino"
    },
    {
      id:2,
      carnet:"001",
      nombre:"pedro",
      fecha_nacimiento: "2000-01-21",
      genero:"masculino"
    },
    {
      id:3,
      carnet:"002",
      nombre:"ana",
      fecha_nacimiento: "2000-01-22",
      genero:"femenino"
    },
    {
      id:4,
      carnet:"9087013",
      nombre:"maria",
      fecha_nacimiento: "2000-01-25",
      genero:"femenino"
    },
    {
      id:5,
      carnet:"9087013",
      nombre:"pablo",
      fecha_nacimiento: "2000-01-25",
      genero:"masculino"
    }
  ];

  const carreras = [
    {
      id:1,
      carrera:"tecnologia medica",
      mensiones:[
        {
          mension:"laboratorio clinico"
        },
        {
          mension:"fisioterapia"
        },
        {
          mension:"bioimagenologia"
        }
      ]
    },
    {
      id:2,
      carrera:"informática",
      mensiones:[
        {
          mension:"programacion"
        },
        {
          mension:"redes"
        },
        {
          mension:"robotica"
        },
        {
          mension:"Inteligencia Artificial"
        }
      ]
    },
  ];

  const ambiente = {
    id:1,
    edificio:"medicina",
    piso:"planta baja",
    aula:"Aula K1",
    capacidad:120,
    silla:120,
    tableros:50
  }

  //manejo de EVENTOS => "methods"
  const presionaste = () => {
    console.log("precionaste el boton")
  }



</script>

<style>
  /*CSS*/
  h1{
    color: red;
  }
</style>

<template>
  <!--HTML-->
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2 :style = "col">Hola soy un texto azul</h2>

  <!-- uso de la directiva v-if-->
   <div>
    <h1>Uso de las directivas v-if</h1>
    <h2 v-if="sw === true">
    Verdadero
  </h2>
  <h2 v-else-if="sw === false">
    Falso
  </h2>
  <h2 v-else>
    null
  </h2>
  <p v-show="show">
    mostrar texto
  </p>
   </div>

  <!--Recorrer un array-->
  <div>
    <h1>Reccorrer un array</h1>
    <ul>
      <li v-for="(nombre, index) in nombres" :key="index">
        {{ index }} - {{nombre}}
      </li>
    </ul>
  </div>

  <!--Recorrer un array de objetos-->
  <div>
    <h1>Recorrer un array de objetos</h1>
    <table>
    <thead>
      <th>id</th>
      <th>carnet</th>
      <th>nombre</th>
      <th>fecha nacimiento</th>
      <th>genero</th>
    </thead>
    <tbody>
      <tr v-for="postulante in postulantes" :key="postulante.id">
        <td>{{ postulante.id }}</td>
        <td>{{ postulante.carnet }}</td>
        <td>{{ postulante.nombre }}</td>
        <td>{{ postulante.fecha_nacimiento }}</td>
        <td>{{ postulante.genero }}</td>
      </tr>
    </tbody>
  </table>
  </div>

  <!--Recorrer un array de objetos dentro otro array de objetos-->
  <div>
    <h1>Recorrer un array de objetos dentro otro array de objetos</h1>
    <ul>
    <li v-for="carrera in carreras" :key="carrera.id">
      {{ carrera.id }} - {{ carrera.carrera }}
      <table>
        <thead>
          <th>mension</th>
        </thead>
        <tbody>
          <tr v-for="mension in carrera.mensiones" :key="mension.mension">
            <td>{{ mension.mension }}</td>
          </tr>
        </tbody>
      </table>
    </li>
  </ul>
  </div>

  <!--mostrar la informacion de un objeto-->
  <div>
    <h1>mostrar la informacion de un objeto</h1>
    <ul>
    <li v-for="(value, propiedad, index) in ambiente" :key="index">
      {{ index }} - {{propiedad}} => {{ value }}
    </li>
  </ul>
  </div>

  <!--mostrar a los postulantes femeninos-->
  <div>
    <h1>mostrar a los postulantes femeninos</h1>
    <ul>
    <li v-for="postulante in postulantes" :key="postulante.id">
      <p v-if="postulante.genero === 'femenino' ">
        {{ postulante.id }}
        {{ postulante.carnet }}
        {{ postulante.nombre }}
        {{ postulante.fecha_nacimiento }}
        {{ postulante.genero }}
      </p>
    </li>
  </ul>
  <hr>
  <ul>
    <template v-for="postulante in postulantes" :key="postulante.id">
      <li v-if="postulante.genero === 'femenino' ">
        <p>
          {{ postulante.id }}
          {{ postulante.carnet }}
          {{ postulante.nombre }}
          {{ postulante.fecha_nacimiento }}
          {{ postulante.genero }}
        </p>
      </li>
    </template>
  </ul>
  </div>

  <!--MANEJO DE EVENTOS-->
  <div>
    <h1>MANEJO DE EVENTOS</h1>
      <button> Activame</button>
  </div>

</template>