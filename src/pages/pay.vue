<template>
<div class="container">
  <input class="input">
  <button class="btn-pay">充 值</button>
</div>
</template>

<script>
export default {
  name: "pay"
}
</script>

<style scoped>
.container{
  background: #42b983;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input{
  width: 50vw;
  height: 10vw;
}
.btn-pay{
  width: 50vw;
  height: 10vw;
  background: blue;
  border: 0.1vh solid;
  border-radius: 2vw ;
  color: white;
  font-size: 4vw;
  margin-top: 10vh;
}
</style>