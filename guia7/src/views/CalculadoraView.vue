<template>
<h1>Calculadora</h1>
<div id="card">
<table>
<tr>
<td>Operación</td>
<td>
<select>
<option></option>
</select>
</td>
</tr>
<tr>
<td>Número 1</td>
<td><input type="number"></td>
</tr>
<tr>
<td>Número 2</td>
<td><input type="number"></td>
</tr>
<tr>
<td colspan="2">
<hr>
<button>Calcular</button>
</td>
</tr>
</table>
</div>
<br>
<div id="card">
<h4>Respuesta: </h4>
</div>
</template>
<script>
export default {
name: 'CalculadoraView'
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
width: 100%;
padding: 10px;
background-color: yellowgreen;
color: black;
}
table {
margin: auto;
}
select {
width: 100%;
}
</style>