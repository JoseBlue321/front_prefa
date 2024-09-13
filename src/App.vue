<template>
  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/users">Users</RouterLink>
    <RouterLink to="/login">Ingresar</RouterLink>
    <button @click="salir()">Salir</button>
  </nav>

  <RouterView />
</template>

<script setup>
const salir = () => {
  localStorage.removeItem("access_token");
  window.location.href = 'login'
}
</script>