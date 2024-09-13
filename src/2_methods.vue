<script setup>
import {ref, computed} from "vue";
  //methods
  const presionaste = (message) => {
    console.log(message)
  }

  //Reactividad
  const num = ref(0);
  const incrementar = () =>{
    num.value ++;
  }
  const decrementar = () =>{
    num.value --;
  }
  const reset =()=>{
    num.value = 0;
  }

  //computed (Se recomienda que no este la logica en el Html)
  const classnum = computed(()=>{
    if(num.value ===0){
      return 'cero';
    }
    if(num.value > 0){
      return 'increment';
    }
    if(num.value < 0){
      return 'decrement';
    }
  });

  const array = ref([]);
  const agregar = () =>{
    array.value.push(num.value)
    console.log(array);
  };
  const sw = computed(()=>{
    return array.value.includes(num.value);
  });
</script>

<style>
  h1{
    color: red;
  }
  .increment{
    color: green;
  }
  .decrement{
    color: red;
  }
  .cero{
    color: brown;
  }
</style>

<template>
  <div>
    <h1>Methods</h1>
    <!--Methods-->
    <button v-on:click="presionaste('boton 1')"> Boton 1</button>
    <button @click="presionaste('boton 2')">Boton 2</button>
  </div>

  <div>
    <h1>Reactividad y Computed</h1>
    <!--Reactividad y Computed-->
    <button @click="incrementar()" >Ingrementar</button>
    <button @click="decrementar()" >Decrementar</button>
    <button @click="reset()" >Reset</button>
    <button @click="agregar()" :disabled="sw">Agregar a la lista</button>
    <h2>
      <p :class="classnum">
        {{ num }}
      </p>
    </h2>

    <ul>
      <li v-for="(arr,index) in array" :key="index">
        {{  arr }}
      </li>
    </ul>
  </div>
</template>