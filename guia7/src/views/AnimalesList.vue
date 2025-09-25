<template>
    <h1>Lista de animales</h1>
        <div id="card">
        <h3>Nuevo animal</h3>
    <input type="text" placeholder="Escribe un animal">
<br>
    <button>Agregar</button>
</div>
    <br>
<div id="card">
<h4>Animales</h4>
</div>
</template>
<script>
export default {
name: 'AnimalesList'
}
</script>
<style scoped>
#card {
border: 1px solid yellowgreen;
border-radius: 40px;
margin: auto;
width: 50%;
padding: 20px;
}
button{
border: 1px solid darkolivegreen;
width: 180px;
padding: 10px;
margin: 20px;
background-color: yellowgreen;
border-radius: 40px;
color: black;
}
</style>